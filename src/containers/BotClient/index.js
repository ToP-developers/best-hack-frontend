import * as React from "react";
import {connect} from "react-redux";
import {Route, Router, Switch} from "react-router";

import Button from "../../components/Button/Button";
import Response from "../../components/Response/Response";

import * as botClientActions from "../../redux/botClient/action";

import "./style.scss";

@connect(mapStateToProps, mapDispatchToProps)
export default class BotClient extends React.Component {
    constructor() {
        super();

        const responses = [];
        for (let i = 0; i < 5; i++) {
            responses.push({
                url: "",
                description: []
            });
        }

        this.state = {responses};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSendClick = this.handleSendClick.bind(this);
    }

    componentDidMount() {
        const {getResponses} = this.props;
        getResponses();
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.user) {
            this.props.history.push('/');
        }

        const {responses} = newProps;
        const newResponses = this.state.responses;

        responses.forEach((response, id) => {
            newResponses[id] = response;
        });

        this.setState({responses: newResponses});
    }

    handleDescriptionChange = (value, key) => {
        let responses = this.state.responses;
        responses[key].description = value.split(/\s*[,]\s*/);
        this.setState(responses);
    };

    handleUrlChange = (value, key) => {
        let responses = this.state.responses;
        responses[key].url = value;
        this.setState(responses);
    };

    handleSendClick = () => {
        const responses = this.state.responses.filter(response => {
            return response.description && response.url;
        });
        this.props.sendResponses(responses);
    };

    render() {
        return (
            <div className="bot-client">
                <div className="bot-client__description_title">Чат бот для вашего сайта!</div>
                <ul className="bot-client__description_items">
                    <li>
                        Перечислите разные фразы для ввода клиентов, разделяя их запятыми, например: подключить услугу, включить услугу
                    </li>
                    <li>
                        Для передачи параметров используйте шаблоны %value%, например: пополнить счет на %sum%.
                    </li>
                </ul>
                <div className="bot-client__titles">
                    <div className="bot-client__titles_left">
                        Когда клиент пишет:
                    </div>
                    <div className="bot-client__titles_right">
                        Чатбот приведет его на ссылку:
                    </div>
                </div>
                <div className="bot-client__responses">
                    {this.state.responses.map((response, id) => (
                        <Response
                            key={`response${id}`}
                            id={id}
                            url={response.url}
                            description={response.description.join(", ")}
                            onDescriptionChange={this.handleDescriptionChange}
                            onUrlChange={this.handleUrlChange}/>
                    ))}
                </div>
                <div className="bot-client__buttons">
                    <Button text="Отправить" onClick={this.handleSendClick}/>
                    <Button text="К чату" href="/"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        responses: state.botClient.responses,
        user: state.user.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getResponses() {
            dispatch(botClientActions.getResponses());
        },
        sendResponses(responses) {
            dispatch(botClientActions.sendResponses(responses));
        }
    };
}
