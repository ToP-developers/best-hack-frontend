import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

import "./Header.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo">
                    <Link to="/"><Logo/></Link>
                </div>
                <div className="header__description">Привет</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}
