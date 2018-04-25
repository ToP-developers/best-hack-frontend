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

        const {sendMessage, user} = this.props;
        if (e.key === 'Enter') {
            sendMessage(this.input.value, user);

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
    return {
        user: state.user.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage(message, user) {
            dispatch(botActions.sendMessage(message, user));
        }
    };
}
