import React from 'react';
import { IUseBoardState } from '../hooks/useBoardState';
import { Players } from '../utils/constants';

type GridProps = {
  boardState: IUseBoardState;
};

const Header: React.FC<GridProps> = ({ boardState }) => {
  return (
    <header className="flex-center">
      <div className="brand">
        <img
          className="logo"
          src="https://static.replicastudios.com/production/assets/6b11b99/slp/img/replica-full.png"
        />
        <img
          className="sep"
          src="https://static.replicastudios.com/production/assets/6b11b99/slp/img/left-line.png"
        />
        <span>Tic Tac Toe</span>
      </div>

      <div className="scoreboard">
        <span className="scoreboard__player">Player X</span>
        <span className="scoreboard__score">
          <span>{boardState.scores[Players.X]}</span>
          <span>-</span>
          <span>{boardState.scores[Players.O]}</span>
        </span>
        <span className="scoreboard__player">Player O</span>
      </div>
    </header>
  );
};

export default Header;
