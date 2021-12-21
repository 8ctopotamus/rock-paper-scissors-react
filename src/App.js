import Header from './components/header';
import Controls from './components/controls'
import Player from './components/player'
import GameOver from './components/gameOver'
import { GameProvider, GameContext } from './context/gameContext'
import './App.css';

function App() {
  return (
    <GameProvider>
      <Header />
      <GameContext.Consumer>
        {({ state: { players } }) => {
          return players.human.lives === 0 || players.computer.lives === 0 ? (
            <GameOver />
          ) : (
            <>
              <div className="player-container">
                <Player name="human" />
                <Player name="computer" />
              </div>
              
              <Controls />
            </>
          )
        }}
      </GameContext.Consumer>
        
    </GameProvider>
  )
}

export default App;
