type BoardStateResponse = {
  movesLeft: number;
  isDraw: boolean;
  winner: string;
};

// Sends board data to the API and returns a simple response model to the App
export const getBoardState = async (
  currentPlayer: string,
  lastPositionPlayed: string | null,
  cells: NodeListOf<HTMLDivElement>
): Promise<BoardStateResponse> => {
  const response = await fetch('/api/boardstate', {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      currentPlayer,
      lastPositionPlayed,
      cells: Array.from(cells).map((cell) => ({
        position: cell.dataset.pos,
        player: cell.dataset.player,
      })),
    }),
  });

  return await response.json();
};
