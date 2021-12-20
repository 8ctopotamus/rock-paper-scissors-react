import { useState } from 'react'
import { FaSkull, FaTrophy } from 'react-icons/fa';
import Controls from './components/controls';
import Header from './components/header';
import Player from './components/player'
import { getComputerChoice } from './utils/helpers'
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
  const [players, setPlayers] = useState(defaultPlayers)
  const [message, setMessage] = useState(defaultMessage)

  const handleChoiceChange = huChoice => {
    const { human, computer } = players
    const compChoice = getComputerChoice()
    let message
    if (
      (huChoice == "r" && compChoice == "s") || 
      (huChoice == "p" && compChoice == "r") || 
      (huChoice == "s" && compChoice == "p")
    ) {
      computer.lives--
      message = 'ROUND WON'
    } else if (huChoice === compChoice) {
      message = 'TIE'
    } else {
      human.lives--
      message = 'ROUND LOST'
    }
    setMessage(message)
    setPlayers({
      human: {
        ...human,
        choice: huChoice
      },
      computer: {
        ...computer,
        choice: compChoice
      },
    })
  }

  const handleNextRound = () => {
    setPlayers({
      human: {
        ...players.human,
        choice: null,
      },
      computer: {
        ...players.computer,
        choice: null,
      }
    })
    setMessage(defaultMessage)
  }

  const reset = () => {
    setPlayers(defaultPlayers)
    setMessage(defaultMessage)
  }

  return (players.human.lives === 0 || players.computer.lives === 0) ? (
    <div className='game-over'>
      {players.human.lives === 0 ? (
        <>
          <FaSkull size={100} />
          <h1>YOU LOSE</h1>
        </>
      ) : (
        <>
          <FaTrophy size={100} />
          <h1>YOU WON!</h1>
        </>
      ) }
      <button onClick={reset}>Play Again</button>
    </div>
  ) : (
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
        selected={players.human.choice}
        handleChoiceChange={handleChoiceChange}
        message={message}
        handleNextRound={handleNextRound}
      />
    </>
  )
}

export default App;
