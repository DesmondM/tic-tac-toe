import PlayerInfo from "./components/PlayerInfo"

function App() {
  

  return (
    <main>
        <div id='game-container'>
            <ol id='players'>
               <PlayerInfo player="Player 1" symbol="X"/>
                <PlayerInfo player="Player 2" symbol="O"/>

            </ol>
        </div>
    </main>
  )
}


export default App
