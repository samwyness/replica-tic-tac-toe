import React, { useRef, createRef, RefObject, useEffect } from 'react';
import { IUseBoardState } from '../hooks/useBoardState';

import { ReactComponent as PlayerXPiece } from '../assets/close_black_24dp.svg';
import { ReactComponent as PlayerPiece } from '../assets/circle_black_24dp.svg';

// Here I have decided (after some quick research online) that I would use grid
// positioning data, in an attempt to calculate the players moves across the 3x3 grid.
//
// Why? I wanted to try an alternative approach to what is shown in the link below, and minimize
// the amount of code used when evaluating the board state.
// https://reactjs.org/tutorial/tutorial.html#declaring-a-winner
//
// Instead of defining 'winning conditions' used to determine the board state, we send the board
// data to our API service, which uses the last played cell position to check whether the player has
// already made any other moves along the same axis. If 3 matches are found, the game is over and
// the current player is declared the winner

const gridCellPositions = [
  'col-0 row-0 corner-0',
  'col-1 row-0',
  'col-2 row-0 corner-1',
  'col-0 row-1',
  'col-1 row-1 corner-0 corner-1',
  'col-2 row-1',
  'col-0 row-2 corner-1',
  'col-1 row-2',
  'col-2 row-2 corner-0',
];

type GridProps = {
  boardState: IUseBoardState;
};

const Grid: React.FC<GridProps> = ({ boardState }) => {
  const isNewGame = !boardState.lastPosition;
  // Keeps a reference of all our cells in state
  const cellRefs = useRef(
    gridCellPositions.map(() => createRef<HTMLDivElement>())
  );

  // Assign the current player to the clicked cell and update the last position played
  const handleCellClick = (ref: RefObject<HTMLDivElement>) => {
    const cell = ref.current;

    if (cell && !cell.dataset.player) {
      cell.dataset.player = boardState.currentPlayer;
      cell.dataset.pos && boardState.setLastPosition(cell.dataset.pos);
    }
  };

  // Remove all existing moves on the board
  const clearBoard = () => {
    cellRefs.current.forEach((cell) => {
      if (cell.current) {
        cell.current.dataset.player = '';
      }
    });
  };

  useEffect(() => {
    isNewGame && clearBoard();
  }, [isNewGame, clearBoard]);

  return (
    <div className="grid-container">
      <div className="grid">
        {gridCellPositions.map((cell, index) => (
          <div
            key={cell}
            ref={cellRefs.current[index]}
            className="grid__cell"
            data-pos={cell}
            data-player=""
            onClick={() => handleCellClick(cellRefs.current[index])}
          >
            <div className="content">
              <PlayerXPiece />
              <PlayerPiece />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
