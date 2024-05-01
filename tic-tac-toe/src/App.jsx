import Gameboard from "./components/Gameboard"
import PlayerInfo from "./components/PlayerInfo"

function App() {
  

  return (
    <main>
        <div id='game-container'>
            <ol id='players'>
               <PlayerInfo initialName="Player 1" symbol="X"/>
               <PlayerInfo initialName="Player 2" symbol="O"/>

            </ol>
            <Gameboard/>
        </div>
    </main>
  )
}


export default App
