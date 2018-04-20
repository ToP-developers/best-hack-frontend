import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as userActions from '../../redux/user/action.js';

import './style.scss';

@connect(mapStateToProps, mapDispatchToProps)
export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            name: formData.get('name'),
            login: formData.get('login'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        if (data.email && data.password && data.email && data.name) {
            this.props.registerUser(data);
        } else {
            console.log(data);
            // alert('Fill in all fields');
        }
    }

    render() {
        return (
            <form className="content" onSubmit={this.handleSubmit}>
                <div className="title">Sign In</div>
                <input name="login" type="text" placeholder="Login or E-mail"/>
                <input name="password" type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
                <div className="social">
                    <span>or sign in with social media</span>
                </div>
                <div className="buttons">
                    <button className="vk">
                        <i className="fa fa-vk"/>
                    </button>
                </div>
                <div className="already">
                    Or create account <Link to="/signUp">Sign Up</Link>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser(data) {
            dispatch(userActions.signInUser(data));
        }
    };
}
