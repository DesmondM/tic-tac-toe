import React, {useState} from "react"
import Gameboard from "./components/Gameboard"
import PlayerInfo from "./components/PlayerInfo"
import Log from "./components/Log"
import {WINNING_COMBINATIONS} from './winning-combinations'
import GameOver from "./components/GameOver"

function derivedActivePlayer(gameTurns){
    let currentPlayer = 'X'
            if(gameTurns.length>0 && gameTurns[0].player==='X'){
                currentPlayer='O'
            }
    return currentPlayer
}

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function App() {

    const [gameTurns, setGameTurns]= useState([])
    // const [activePlayer, setActivePlayer]= useState('X')

    const activePlayer =derivedActivePlayer(gameTurns)
  
    function handleSelectSquare(rowIndex, colIndex){
        // setActivePlayer((activePlayer)=>activePlayer==='X'?'O':'X')
        setGameTurns(prevTurns=>{
            // let currentPlayer = 'X'
            // if(prevTurns.length>0 && prevTurns[0].player==='X'){
            //     currentPlayer='O'
            
             
            const currentPlayer= derivedActivePlayer(prevTurns)
            const updatedTurns = [{square:{row:rowIndex, col:colIndex}, player:currentPlayer},...prevTurns]
            return updatedTurns
        })
    }
    let gameBoard = initialGameBoard
    for (const turn of gameTurns){  
        const {square, player} = turn
        const {row, col } = square
        gameBoard[row][col]= player
    }

    let winner;
    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSquare= gameBoard[combination[0].row][combination[0].column]
        const secondSquareSquare= gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSquare= gameBoard[combination[2].row][combination[2].column]
        if (firstSquareSquare && firstSquareSquare===secondSquareSquare && firstSquareSquare===thirdSquareSquare){
           winner=firstSquareSquare;
        }
    } 

    const hasDraw = gameTurns.length===9 &&!winner
  return (
    <main>
        <div id='game-container'>
            <ol id='players' className='highlight-player'>
               <PlayerInfo initialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
               <PlayerInfo initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>

            </ol>
            {(winner ||hasDraw) && <GameOver winner={winner}/>}
            <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
  )
}


export default App
