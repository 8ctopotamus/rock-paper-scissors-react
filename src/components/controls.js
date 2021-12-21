import { useGameContext } from '../context/gameContext'
import { choices } from '../utils/constants'
import { renderChoiceIcon } from '../utils/helpers'

const Controls = ({ handleChoiceChange, handleNextRound }) => {
  const value = useGameContext()
  console.log(value)

  return (
    <div className='controls'>
      <h3>{message}</h3>

      {message !== 'CHOOSE' ? (
        <button onClick={handleNextRound}>NEXT ROUND</button>
      ) : (
        <div className='choices-wrap'>
          {choices.map(choice => {
            return (
              <button 
                onClick={() => handleChoiceChange(choice)}
                key={choice}
              >
                { renderChoiceIcon(choice, { size: 32 }) }
              </button>
            )
          })}
        </div>
      ) }
    </div>
  )
}

export default Controls