export default function GameOver({winner}){
    return(
        <div id='game-over'>
            <h2>Game over</h2>
            {winner &&<p>{winner} has won!</p>}
            {!winner &&<p>it's a flippant draw</p>}
            <p><button>Rematch!</button></p>
        </div>
    )
}