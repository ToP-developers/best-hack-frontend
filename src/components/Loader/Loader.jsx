import * as React from "react";
import {connect} from "react-redux";

import "./Loader.scss";

export default class Loader extends React.Component {
    render() {
        return (
            <div className="loader-wrapper">
                <div className="loader"/>
            </div>
        );
    }
}
