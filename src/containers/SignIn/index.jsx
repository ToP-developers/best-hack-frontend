import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as userActions from '../../redux/user/action.js';

import './style.scss';

@connect(mapStateToProps, mapDispatchToProps)
export default class SignIn extends React.Component {
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
            login: formData.get('login'),
            password: formData.get('password')
        };

        if (data.login && data.password) {
            this.props.signInUser(data);
        } else {
            console.log(data);
            // alert('Fill in all fields');
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <form className="content" onSubmit={this.handleSubmit}>
                <div className="title">Sign In</div>
                <input name="login" type="text" placeholder="Login or E-mail"/>
                <input name="password" type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
                <div className="already">
                    Or create account <Link to="/signUp">Sign Up</Link>
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
        signInUser(data) {
            dispatch(userActions.signInUser(data));
        }
    };
}
