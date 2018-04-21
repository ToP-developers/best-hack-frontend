import * as React from "react";
import {Route, Router, Switch} from "react-router";
import {connect} from "react-redux";

import "./style.scss";

import Main from "../Main/index";
import BotClient from "../BotClient/index";
import SignUp from '../SignUp/index.jsx';
import SignIn from '../SignIn/index.jsx';
import Services from '../Services/index.jsx';
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import * as userActions from '../../redux/user/action';

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component {
    //  <Route path="/example/" render={() => (this.renderPage(<Example/>))}/>
    componentWillMount() {
        this.props.getUserData();
    }

    render() {
        const {ui} = this.props;
        const {isLoading} = ui;

        return (
            <div className="app">
                <Header/>
                {isLoading ? <Loader/> :
                    <Switch>
                        <Route path="/test" component={Services}/>
                        <Route path="/signIn" component={SignIn}/>
                        <Route path="/signUp" component={SignUp}/>
                        <Route path="/bot" component={BotClient}/>
                        <Route exact path="/" component={Main}/>
                    </Switch>
                }
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
    return {
        getUserData() {
            dispatch(userActions.getUserData());
        }
    };
}
