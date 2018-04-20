import * as React from "react";
import {Route, Router, Switch} from "react-router";
import {connect} from "react-redux";

import "./style.scss";

import Main from "../Main/index";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component {
    //  <Route path="/example/" render={() => (this.renderPage(<Example/>))}/>
    render() {
        const {ui} = this.props;
        const {isLoading} = ui;

        return (
            <div className="app">
                {isLoading && <Loader/>}
                <Header/>
                <Switch>
                    <Route path="/" component={Main}/>
                </Switch>
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