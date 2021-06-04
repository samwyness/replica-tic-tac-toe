import React from 'react';
import { IUseBoardState } from '../hooks/useBoardState';

type GridProps = {
  boardState: IUseBoardState;
};

const Footer: React.FC<GridProps> = ({ boardState }) => {
  return (
    <footer className="flex-center">
      <div>{boardState.currentPlayer}'s turn!</div>
    </footer>
  );
};

export default Footer;
