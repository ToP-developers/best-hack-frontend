import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {URLParser} from '../../service/urlParser.js';

// import './style.scss';

@connect(mapStateToProps, mapDispatchToProps)
export default class Services extends React.Component {
    componentDidUpdate() {
    }

    constructor(props) {
        super(props);

        this.state = {
            params: {}
        };

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
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        // const params = URLParser(...);
        // for (param in params) {
        //     document.querySelector(`*[name=${param}]`).value = params[param];
        // }

        this.setState({params: URLParser(this.props.history)});
    }

    render() {
        return (
            <form className="content" onSubmit={this.handleSubmit}>
                <div className="title">Sign In</div>
                <input name="login" type="text" placeholder="Login or E-mail" value={this.state.params.login}/>
                <input name="password" type="password" placeholder="Password" value={this.state.params.password}/>
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
    return {};
}
