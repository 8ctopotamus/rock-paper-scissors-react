import { useState } from 'react';
import Header from './components/header';
import Controls from './components/controls'
import './App.css';

const defaultMessage = 'CHOOSE'

const defaultPlayers = {
  human: {
    choice: null,
    lives: 3,
  }, 
  computer: {
    choice: null,
    lives: 3,
  }
}

function App() {
  const [message, setMessage] = useState(defaultMessage)
  const [players, setPlayers] = useState(defaultPlayers)

  const handleChoiceChange = humanChoice => {
    console.log(humanChoice)
  }

  const handleNextRound = () => {
    console.log('Next round...')
  }

  return (
    <>
      <Header />

      <div className="player-container">
        {/* TODO: Player components */}
      </div>
      
      <Controls
        message={message} 
        handleChoiceChange={handleChoiceChange}
        handleNextRound={handleNextRound}
      />
    </>
  )
}

export default App;
