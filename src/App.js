import { useState } from 'react';
import Header from './components/header';
import Controls from './components/controls'
import Player from './components/player'
import { getComputerChoice } from './utils/helpers';
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
    const { human, computer } = players
    const computerChoice = getComputerChoice()
    let msg
    if (
      humanChoice === 'r' && computerChoice === 's' ||
      humanChoice === 'p' && computerChoice === 'r' ||
      humanChoice === 's' && computerChoice === 'p'
    ) {
      msg = 'ROUND WON'
      computer.lives--
    } else if (humanChoice === computerChoice) {
      msg = 'TIE'
    } else {
      msg = 'ROUND LOST'
      human.lives--
    }

    setMessage(msg)

    setPlayers({
      human: {
        ...human,
        choice: humanChoice,
      },
      computer: {
        ...computer,
        choice: computerChoice,
      }
    })
  }

  const handleNextRound = () => {
    const { human, computer } = players
    setMessage(defaultMessage)
    setPlayers({
      human: {
        ...human,
        choice: null,
      },
      computer: {
        ...computer,
        choice: null,
      }
    })
  }

  return (
    <>
      <Header />

      <div className="player-container">
        <Player 
          name="human" 
          choice={players.human.choice}
          lives={players.human.lives}
        />
        <Player 
          name="computer" 
          choice={players.computer.choice}
          lives={players.computer.lives}
        />
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
