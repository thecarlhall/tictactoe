import { AI } from 'boardgame.io/ai';
import { Client } from 'boardgame.io/react';

import { TicTacToe } from './game';
import { TicTacToeBoard } from './board';

export const TicTacToeClient = Client({
    game: TicTacToe,
    board: TicTacToeBoard,
    // multiplayer: { local: true },
    multiplayer: { server: 'localhost:8000' },

    ai: AI({
      enumerate: (G, ctx) => {
        let moves = [];
        for (let i = 0; i < 9; i++) {
          if (G.cells[i] === null) {
            moves.push({ move: 'clickCell', args: [i] });
          }
        }
        return moves;
      },
    })
});
