import React from 'react';
import { Route } from "react-router-dom";
import { TicTacToeClient } from './client';
import qs from 'query-string';

export default class App extends React.Component {
    componentDidMount() {
        // const values = qs.parse(this.props.location.search);
        // console.log(values['playerID']);
        console.log(this.props);

    }

    render() {
        return (<div>
            <TicTacToeClient playerID="0" />
            <br />
            <Route component={TicTacToeClient} />
        </div>);
    }
}
