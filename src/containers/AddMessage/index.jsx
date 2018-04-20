import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import * as botActions from "../../redux/bot/action";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class AddMessage extends React.Component {
    handleClick = (e) => {
        if (!this.input.value) {
            return;
        }

        const {addMessage, messageReceived} = this.props;
        if (e.key === 'Enter') {
            addMessage(this.input.value, true);
            this.input.value = '';
        }
    };

    render() {
        return (
            <div className="add-message">
                <input
                    onKeyPress={this.handleClick}
                    type="text"
                    placeholder="Введите сообщение"
                    ref={(node) => {
                        this.input = node;
                    }}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage(message, author) {
            dispatch(botActions.addMessage(message, author));
        },
        messageReceived(message, author) {
            dispatch(botActions.messageReceived(message, author));
        }
    };
}
