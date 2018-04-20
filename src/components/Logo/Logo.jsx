import * as React from "react";
import {connect} from "react-redux";

import "./Logo.scss";

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <div className="logo__pic"/>
                <div className="logo__text">
                    Я Логотип
                </div>
            </div>
        );
    }
}
