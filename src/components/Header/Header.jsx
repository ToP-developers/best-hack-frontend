import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

// import "../../redux/user/action";

import "./Header.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <div className="header">
                <div className="header__logo">
                    <Link to="/"><Logo/></Link>
                </div>
                <div className="header__description">Личный кабинет</div>
                <div className="header__right">
                    {user &&
                    <div className="header__user">
                        <div className="login">{user.username}</div>
                        <Button text="Выйти"/>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ui: state.ui,
        user: state.user.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout() {
            //  dispatch(userActions.logout());
        }
    };
}
