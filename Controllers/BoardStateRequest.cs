using ReplicaTicTacToe.Models;

namespace ReplicaTicTacToe.Controllers
{
    public class BoardStateRequest
    {
        public string CurrentPlayer { get; set; }

        public string LastPositionPlayed { get; set; }

        public BoardCell[] Cells { get; set; }
    }
}
