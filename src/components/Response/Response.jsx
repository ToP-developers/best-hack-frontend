import * as React from "react";
import {connect} from "react-redux";
import * as cn from "classnames";

import "./Response.scss";


export default class Response extends React.Component {
    constructor(props) {
        super(props);

        const {description, url} = this.props;
        this.state = {description, url};
        console.log(this.state);

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        const {description, url} = newProps;
        this.setState({description, url});
    }

    handleDescriptionChange = (e) => {
        const {onDescriptionChange, id} = this.props;
        this.setState({
            url: this.state.url,
            description: e.target.value
        });
        onDescriptionChange(e.target.value, id);
    };

    handleUrlChange = (e) => {
        const {onUrlChange, id} = this.props;
        this.setState({
            url: e.target.value,
            description: this.state.description
        });
        onUrlChange(e.target.value, id);
    };

    render() {
        return (
            <div className="response">
                <textarea value={this.state.description} onChange={this.handleDescriptionChange} className="response__description"/>
                <textarea value={this.state.url} onChange={this.handleUrlChange} className="response__url"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}
