import React, {useState} from "react"
import Gameboard from "./components/Gameboard"
import PlayerInfo from "./components/PlayerInfo"
import Log from "./components/Log"

function App() {

    const [gameTurns, setGameTurns]= useState([])
    const [activePlayer, setActivePlayer]= useState('X')
  
    function handleSelectSquare(rowIndex, colIndex){
        setActivePlayer((activePlayer)=>activePlayer==='X'?'O':'X')
        setGameTurns(prevTurns=>{
            let currentPlayer = 'X'
            if(prevTurns.length>0 && prevTurns[0].player==='X'){
                currentPlayer='O'
            }
            const updatedTurns = [{square:{row:rowIndex, col:colIndex}, player:activePlayer},...prevTurns]
            return updatedTurns
        })
    }

  return (
    <main>
        <div id='game-container'>
            <ol id='players' className='highlight-player'>
               <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
               <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>

            </ol>
            <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
        </div>
        <Log/>
    </main>
  )
}


export default App
