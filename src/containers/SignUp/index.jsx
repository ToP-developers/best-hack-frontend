import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as userActions from '../../redux/user/action.js';

import './style.scss';

@connect(mapStateToProps, mapDispatchToProps)
export default class SignUp extends React.Component {
    componentDidUpdate() {
        const {user, history} = this.props;
        if (user) {
            history.push('/');
        }
    }

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

        if (data.login && data.password && data.email && data.name) {
            this.props.registerUser(data);
        } else {
            console.log(data);
            // alert('Fill in all fields');
        }
    }

    render() {
        return (
            <form className="content" onSubmit={this.handleSubmit}>
                <div className="title">Create account</div>
                <input name="name" type="text" placeholder="Name"/>
                <input name="login" type="text" placeholder="Login"/>
                <input name="email" type="email" placeholder="E-mail"/>
                <input name="password" type="password" placeholder="Password"/>
                <button type="submit">Create Account</button>
                <div className="social">
                    <span>or sign up with social media</span>
                </div>
                <div className="buttons">
                    <button className="vk">
                        <i className="fa fa-vk"/>
                    </button>
                </div>
                <div className="already">
                    Already have an account? <Link to="/signIn">Sign In</Link>
                </div>
            </form>
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
        registerUser(data) {
            dispatch(userActions.registerUser(data));
        }
    };
}
