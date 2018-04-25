import * as React from "react";
import {connect} from "react-redux";

import "./Message.scss";

export default class Message extends React.Component {
    render() {
        const {text, author} = this.props;
        let classNames = "message";

        if (author) {
            classNames += " author";
        }
        return (
            <div className={classNames}>
                {text}
            </div>
        );
    }
}
