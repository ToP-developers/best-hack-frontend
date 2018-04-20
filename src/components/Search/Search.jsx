import * as React from "react";
import {connect} from "react-redux";
import * as cn from "classnames";

import "./Search.scss";


export default class Search extends React.Component {
    handleChange = (e) => {
        const {onChange} = this.props;
        onChange(e.target.value);
    };

    render() {
        return (
            <input onChange={this.handleChange} className="search" placeholder="Поиск"/>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}
