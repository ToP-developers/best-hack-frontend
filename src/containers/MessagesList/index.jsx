import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";
import Message from "../../components/Message/Message";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class MessagesList extends React.Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {messages} = this.props;

        return (
            <div className="messages-list">
                {messages.map(message => (
                    <Message
                        key={message.id}
                        text={message.text}
                        author={message.author}
                    />
                ))}
                <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.bot.messages
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}
