import React, {useState} from "react"
import Gameboard from "./components/Gameboard"
import PlayerInfo from "./components/PlayerInfo"

function App() {

    const [activePlayer, setActivePlayer]= useState('X')
  
    function handleSelectSquare(){
        setActivePlayer((activePlayer)=>activePlayer==='X'?'O':'X')
    }

  return (
    <main>
        <div id='game-container'>
            <ol id='players' className='highlight-player'>
               <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
               <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer==='X'}/>

            </ol>
            <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
    </main>
  )
}


export default App
