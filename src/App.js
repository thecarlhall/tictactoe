import React from 'react';
import { withRouter } from 'react-router';

import { TicTacToeClient } from './client';
import PropTypes from 'prop-types';
import qs from 'query-string';

class App extends React.Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    }

    render() {
        const { playerID } = qs.parse(this.props.location.search);

        return (
            <div>
                <TicTacToeClient playerID={playerID} />
            </div>
        );
    }
}

export const AppWithRouter = withRouter(App);
