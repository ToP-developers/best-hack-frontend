import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";
import Response from "../../components/Response/Response";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class BotClient extends React.Component {
    constructor(props) {
        super(props);

        const responses = [];
        for (let i = 0; i < 5; i++) {
            responses.push({
                url: "",
                description: []
            });
        }

        this.responses = responses;
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSendClick = this.handleSendClick.bind(this);
    }

    componentWillMount() {
        const {user, history} = this.props;
        if (!user) {
            history.push('/');
        }

        const {responses} = this.props;

        responses.forEach((response, id) => {
            this.responses[id].url = response.url;
            this.responses[id].description = response.description;
        });
    }


    handleDescriptionChange = (value, key) => {
        this.responses[key].description = value.split(/\s*[,]\s*/);
    };

    handleUrlChange = (value, key) => {
        this.responses[key].url = value;
    };

    handleSendClick = () => {
        const responses = this.responses;
        console.log(responses);
    };

    render() {
        return (
            <div className="bot-client">
                <div className="bot-client__description">Чат бот для вашего сайта!</div>
                <div className="bot-client__titles">
                    <div className="bot-client__titles_left">
                        Когда клиент пишет:
                    </div>
                    <div className="bot-client__titles_right">
                        Чатбот приведет его на ссылку:
                    </div>
                </div>
                <div className="bot-client__responses">
                    {this.responses.map((response, id) => (
                        <Response
                            key={`response${id}`}
                            id={id}
                            url={response.url}
                            description={response.description.join(", ")}
                            onDescriptionChange={this.handleDescriptionChange}
                            onUrlChange={this.handleUrlChange}/>
                    ))}
                </div>
                <Button text="Отправить" onClick={this.handleSendClick}/>
                <div className="bot-client__tips">
                    <div className="bot-client__tips_title">
                        Подсказки
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        responses: state.botClient.responses
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}
