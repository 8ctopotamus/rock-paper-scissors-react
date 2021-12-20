import { choices } from '../utils/constants'
import { renderChoiceIcon } from '../utils/helpers'

const Selector = ({ handleChoiceChange, selected, message, handleNextRound }) => {
  return (
    <div className="controls">
      <h3>{message}</h3>
      
      {message !== 'CHOOSE' ? (
        <button onClick={handleNextRound}>Next Round</button>
      ) : (
        <div className="choices-wrap">
          {choices.map(choice => (
            <button
              onClick={() => handleChoiceChange(choice)}
              style={{ opacity: selected === choice ? 1 : .6 }}
            >
              {renderChoiceIcon(choice, { size: 30 })}
            </button>
          ))}
        </div>
      )}
     </div>
  )
}

export default Selector