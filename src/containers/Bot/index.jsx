import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";
import AddMessage from "../AddMessage";
import MessagesList from "../MessagesList";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class Bot extends React.Component {
    render() {
        return (
            <div className="bot">

                <div className="bot__left">
                    <div className="bot__left_image"/>
                    <Button text="Настроить бот" href="/bot"/>
                </div>
                <div className="bot__chat">
                    <MessagesList/>
                    <AddMessage/>
                </div>

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
