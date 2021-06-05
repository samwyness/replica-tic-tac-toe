import { useState, useCallback, useEffect } from "react";
import { Players } from "../utils/constants";
import { getBoardState } from "../services/BoardStateService";

type IBoardScore = {
  [key: string]: number;
}

export interface IUseBoardState {
  currentPlayer: Players,
  lastPosition: string | null,
  isFirstMove: boolean,
  scores: IBoardScore,
  setLastPosition: React.Dispatch<React.SetStateAction<string | null>>,
  startNewGame: () => void,
}

export const useBoardState = (): IUseBoardState => {
  const [currentPlayer, setCurrentPlayer] = useState(Players.X);
  const [lastPosition, setLastPosition] = useState<string | null>(null);
  const [isFirstMove, setIsFirstMove] = useState(true);
  const [scores, setScores] = useState<IBoardScore>({
    [Players.X]: 0,
    [Players.O]: 0,
  });

  const startNewGame = () => {
    setCurrentPlayer(Players.X);
    setLastPosition(null);
    setIsFirstMove(true);
  }

  // Board validation is handled via our API, this is just a wrapper that sends the request and
  // updates the board if we have a winner, or there is a draw.
  const validateBoard = useCallback(async () => {
    const cells = document.querySelectorAll<HTMLDivElement>('.grid__cell');
    const boardState = await getBoardState(currentPlayer, lastPosition, cells);

    if (boardState.winner) {
      alert(`Player ${currentPlayer} has won!`);

      setScores( (currentScores) => ({
        ...currentScores,
        [currentPlayer]: currentScores[currentPlayer] + 1
      }));

      startNewGame();
    } else if (boardState.isDraw) {
      alert('DRAW! - There are no moves left on the board.');
      startNewGame();
    }
  }, [currentPlayer, isFirstMove, lastPosition]);

  // Game has started! last position was updated
  useEffect(() => {
    if (lastPosition) {
      validateBoard();
      setIsFirstMove(false);
      setCurrentPlayer((curr) => (curr === Players.X ? Players.O : Players.X))
    }
  }, [lastPosition]);

  return {
    currentPlayer,
    lastPosition,
    isFirstMove,
    scores,
    setLastPosition,
    startNewGame
  };
};
