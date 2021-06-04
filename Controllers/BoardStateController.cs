using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace ReplicaTicTacToe.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardStateController : ControllerBase
    {
        // POST api/<BoardStateController>
        [HttpPost]
        public BoardStateResponse BoardState([FromBody] BoardStateRequest request)
        {
            var currentPlayer = request.CurrentPlayer;
            var lastPlayedCellPositions = request.LastPositionPlayed.Split(" ").ToList();
            var movesLeft = request.Cells.Where((cell) => string.IsNullOrEmpty(cell.Player)).Count();
            string winner = null;

            // Using the last played cell positions, we can match other moves made
            // on the board by the current player. If 3 matches are found the current
            // player is declared the winner
            lastPlayedCellPositions.ForEach((position) =>
            {
                var matches = request.Cells.Where((cell) =>
                {
                    return cell.Player == currentPlayer && cell.Position.Contains(position);
                });

                if (matches.Count() == 3)
                {
                    winner = currentPlayer;
                }
            });

            return new BoardStateResponse()
            {
                MovesLeft = movesLeft,
                IsDraw = movesLeft < 1,
                Winner = winner,
            };
        }
    }
}
