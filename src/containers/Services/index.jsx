import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {URLParser} from '../../service/urlParser.js';

import './style.scss';

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
    }

    componentDidMount() {
        this.setState({params: URLParser(this.props.history)});
    }

    render() {
        return (
            <div className="services">
                <div className="services__title">Услуги</div>
                <div className="services__sub-title">Подключенные услуги:</div>
                <ul className="services__items">
                    <li>
                        Все по 100
                    </li>
                </ul>
                <div className="services__title">Подключить оповещения на мобильный</div>
                <form onSubmit={this.handleSubmit}>
                    <div>Введите номер телефона:</div>
                    <input name="phone" type="text" placeholder="Номер телефона" value={this.state.params.phone}/>
                    <button type="submit">Подтвердить</button>
                </form>
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
