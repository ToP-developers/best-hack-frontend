import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";
import Bot from "../Bot/index";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends React.Component {
    render() {
        const {user} = this.props;
        console.log(user);
        return (
            <div className="main">
                {user &&
                <div className="main__chat">
                    <Bot/>
                </div>
                }
                {!user &&
                <div className="main__unregistered">
                    <Button href="/signIn" text="Войти"/>
                    <Button href="/signUp" text="Регистрация"/>
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}
