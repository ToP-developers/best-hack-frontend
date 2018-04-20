import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class Bot extends React.Component {
    render() {
        return (
            <div className="bot">

                <div className="bot__left">
                    Здесь фото бота
                </div>
                <div className="bot__chat">
                    Здесь чатик
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
