import { actions, useGameContext } from '../context/gameContext'
import { choices } from '../utils/constants'
import { renderChoiceIcon } from '../utils/helpers'

const Controls = () => {
  const { state: { message }, dispatch } = useGameContext()

  return (
    <div className='controls'>
      <h3>{message}</h3>

      {message !== 'CHOOSE' ? (
        <button onClick={() => {
          dispatch({ type: actions.SET_NEXT_ROUND })
        }}>NEXT ROUND</button>
      ) : (
        <div className='choices-wrap'>
          {choices.map(choice => {
            return (
              <button 
                onClick={() => dispatch({  
                  type: actions.SET_CHOICE_CHANGE,
                  payload: choice
                })}
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