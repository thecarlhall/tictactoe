const Game = require('boardgame.io/core').Game;

// rows, cols, diags
const wins = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],

    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],

    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
];

// Return true if `cells` is in a winning configuration.
function IsWinner(cells, playerID) {
    return wins.some(win =>
        playerID === cells[win[0]] && 
        cells[win[0]] === cells[win[1]] &&
        cells[win[1]] === cells[win[2]]
    );
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
    return cells.every(c => c !== null);
}

const TicTacToe = Game({
    name: 'tic-tac-toe',
    setup: () => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell(G, ctx, id) {
            // Ensure that we can't overwrite cells.
            if (G.cells[id] === null) {
                G.cells[id] = ctx.currentPlayer;
            }
        },
    },

    flow: {
        movesPerTurn: 1,

        endGameIf: (G, ctx) => {
            if (IsWinner(G.cells, ctx.currentPlayer)) {
                return { winner: ctx.currentPlayer };
            }
            if (IsDraw(G.cells)) {
                return { draw: true };
            }
        },
    },
});

module.exports = { TicTacToe };
