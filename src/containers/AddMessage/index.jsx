import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";

import * as botActions from "../../redux/bot/action";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class AddMessage extends React.Component {
    handleClick = (e) => {
        if (e.key === 'Enter') {
            addMessage(this.input.value);
            this.input.value = ''
        }
    };

    render() {
        return (
            <div className="add-message">
                Add message
                <input
                    onKeyPress={this.handleClick}
                    type="text"
                    ref={(node) => {
                        this.input = node
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
        addMessage(message) {
            dispatch(botActions.addMessage(message))
        }
    };
}
