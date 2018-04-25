import * as React from 'react';
import {Link} from 'react-router-dom';

import './Button.scss';

export default class Button extends React.Component {
    render() {
        const {text, href, onClick, type} = this.props;
        return (
            <Link to={href || '#'}>
                <div className="button" type={type || 'button'} onClick={onClick}>
                    <div className="button__text">
                        {text}
                    </div>
                </div>
            </Link>
        );
    }
}
