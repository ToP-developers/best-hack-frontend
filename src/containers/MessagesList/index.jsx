import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class MessagesList extends React.Component {
    render() {
        return (
            <div className="messages-list">
                Messages
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
