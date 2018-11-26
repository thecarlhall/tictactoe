import React from 'react';
import qs from 'query-string';

export class TicTacToeBoard extends React.Component {
    onClick(id) {
        if (this.isActive(id)) {
            this.props.moves.clickCell(id);
            this.props.events.endTurn();
        }
    }

    isActive(id) {
        if (!this.props.isActive) return false;
        if (this.props.G.cells[id] !== null) return false;
        return true;
    }

    render() {
        let winner = null;
        if (this.props.ctx.gameover) {
            winner =
                this.props.ctx.gameover.winner !== undefined
                    ? (<div id="winner">Winner: {this.props.ctx.gameover.winner}</div>)
                    : (<div id="winner">Draw!</div>);
        } else {
            winner = (<div id="winner">&nbsp;</div>);
        }

        const cellStyle = {
            border: '1px solid #555',
            width: '50px',
            height: '50px',
            lineHeight: '50px',
            textAlign: 'center',
        };

        let tbody = [];
        for (let i = 0; i < 3; i++) {
            let cells = [];
            for (let j = 0; j < 3; j++) {
                const id = 3 * i + j;
                cells.push(
                    <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
                        {this.props.G.cells[id]}
                    </td>
                );
            }
            tbody.push(<tr key={i}>{cells}</tr>);
        }

        return (
            <div>
                Player {this.props.playerID}
                <table id="board">
                    <tbody>{tbody}</tbody>
                </table>
                {winner}
            </div>
        );
    }
}

export default TicTacToeBoard;