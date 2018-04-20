const path = require("path");
const express = require("express");
const body = require("body-parser");
const cookie = require("cookie-parser");
const uuid = require("uuid/v4");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 4004;

app.use("/", express.static(path.join("dist")));
app.use('/signIn', express.static(path.join("dist")));
app.use('/signUp', express.static(path.join("dist")));
app.use('/bot', express.static(path.join("dist")));

app.use(body.json());
app.use(cookie());

const users = {
    "test": {
        login: "test",
        email: "test@top.ru",
        password: "Password1",
        singleScore: 0
    }
};

const ids = {};

function isAuth(id) {
    return ids[id] !== undefined;
}

app.post("/signup", (req, res) => {
    const login = req.body.login;
    const email = req.body.email;
    const password = req.body.password;

    if (!users[login]) {
        users[login] = {
            "login": login,
            "email": email,
            "password": password,
            "singleScore": 0
        };
    } else {
        return res.status(400).json({message: "Логин или Email уже существует"});
    }
    const id = uuid();
    ids[id] = {
        "login": login
    };

    res.cookie("auth", id, {expires: new Date(Date.now() + (1000 * 60 * 10))});
    res.status(201).json(users[login]);
});

app.post("/signin", (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    if (!users[login] || users[login].password !== password) {
        return res.status(400).json({message: "Не верный Логин и/или пароль"});
    }

    const id = uuid();
    ids[id] = {
        "login": login
    };

    res.cookie("auth", id, {expires: new Date(Date.now() + (1000 * 60 * 10))});
    res.status(200).json(users[login]);
});

app.get("/users", (req, res) => {
    const userlist = Object.keys(users)
        .map(login => {
            return {
                "login": login,
                "email": users[login].email,
                "singleScore": users[login].singleScore
            };
        });

    res.json(userlist);
});

app.get("/user", (req, res) => {
    const id = req.cookies.auth;
    if (!isAuth(id)) {
        return res.status(401).end();
    }

    const login = ids[id].login;
    res.json(users[login]);
});

app.post("/logout", (req, res) => {
    const id = req.cookies.auth;
    if (!isAuth(id)) {
        return res.status(401).end();
    }

    res.cookie("auth", "", {expires: new Date()});
    res.json({});
});

app.get("*", (req, res) => {
    res.status(404).send("Sorry cant find that!");
});

app.listen(port, () => console.log(`Example app listening on port: ${port}!`));
