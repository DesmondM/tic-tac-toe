import React, { useState } from "react"
import Gameboard from "./components/Gameboard"
import PlayerInfo from "./components/PlayerInfo"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from "./components/GameOver"

const PLAYERS ={
    X: 'Players 1',
    O: 'Player 2'
}

function derivedActivePlayer(gameTurns) {
    let currentPlayer = 'X'
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O'
    }
    return currentPlayer
}

function derivedWinner(gameBoard, players){
    let winner
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSquare = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSquare = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSquare = gameBoard[combination[2].row][combination[2].column]
        if (firstSquareSquare && firstSquareSquare === secondSquareSquare && firstSquareSquare === thirdSquareSquare) {
            winner = players[firstSquareSquare]
        }
    }
    return winner
}

function derivedGameBoard(gameTurns){
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]
    for (const turn of gameTurns) {
        const { square, player } = turn
        const { row, col } = square
        gameBoard[row][col] = player
    }
    return gameBoard
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function App() {
    const [players, setPlayers] = useState(PLAYERS)
    const [gameTurns, setGameTurns] = useState([])
    // const [activePlayer, setActivePlayer]= useState('X')

    const activePlayer = derivedActivePlayer(gameTurns)

    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((activePlayer)=>activePlayer==='X'?'O':'X')
        setGameTurns(prevTurns => {
            // let currentPlayer = 'X'
            // if(prevTurns.length>0 && prevTurns[0].player==='X'){
            //     currentPlayer='O'


            const currentPlayer = derivedActivePlayer(prevTurns)
            const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
            return updatedTurns
        })
    }
   
    const gameBoard = derivedGameBoard(gameTurns)
    const winner= derivedWinner(gameBoard, players)

    const hasDraw = gameTurns.length === 9 && !winner
    function handleRestart() {
        setGameTurns([])
    }
    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prev => {
            return {
                ...prev,
                [symbol]: newName
            }
        })
    }
    return (
        <main>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                    <PlayerInfo initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
                    <PlayerInfo initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />

                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}


export default App
