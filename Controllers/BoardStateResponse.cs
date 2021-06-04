namespace ReplicaTicTacToe.Controllers
{
    public class BoardStateResponse
    {
        public int MovesLeft { get; set; }

        public bool IsDraw { get; set; }

        public string Winner { get; set; }
    }
}
