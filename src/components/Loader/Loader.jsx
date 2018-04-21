import * as React from 'react';

import './Loader.scss';

export default class Loader extends React.Component {
    render() {
        return (
            <div className="loader-wrapper">
                <div className="loader"/>
                <div className="loaderbefore"/>
                <div className="circular"/>
                <div className="circular another"/>
                <div className="text">Loading</div>
            </div>
        );
    }
}
