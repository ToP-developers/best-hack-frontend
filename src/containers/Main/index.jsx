import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";
import Bot from "../Bot/index";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends React.Component {
    render() {
        const user = {
            login: "Vanya"
        };
        return (
            <div className="main">
                {!user &&
                    <div className="main__unregistered">
                        <Button text="Войти"/>
                        <Button text="Регистрация"/>
                    </div>
                }
                {user &&
                <div className="main__chat">
                    <Bot/>
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}
