import { createContext, useContext, useReducer } from "react";
import { getComputerChoice } from "../utils/helpers";

export const actions = {
  SET_CHOICE_CHANGE: 'SET_CHOICE_CHANGE',
  SET_NEXT_ROUND: 'SET_NEXT_ROUND',
  RESET: 'RESET',
}

const defaultContext = {
  message: 'CHOOSE',
  players: {
    human: {
      choice: null,
      lives: 3,
    }, 
    computer: {
      choice: null,
      lives: 3,
    }
  },
}

export const GameContext = createContext(defaultContext)

const reducer = (state, action) => {
  const human = { ...state.players.human }
  const computer = { ...state.players.computer }

  switch(action.type) {
    case actions.SET_CHOICE_CHANGE:
      const humanChoice = action.payload
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

      return {
        message: msg,
        players: {
          human: {
            ...human,
            choice: humanChoice,
          },
          computer: {
            ...computer,
            choice: computerChoice,
          }
        }
      }

    case actions.SET_NEXT_ROUND:
      return {
        message: defaultContext.message,
        players: {
          human: {
            ...human,
            choice: null,
          },
          computer: {
            ...computer,
            choice: null,
          }
        }
      }
    case actions.RESET:
      return defaultContext
    default:
      return state
  }
}

export const GameProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultContext)

  return (
    <GameContext.Provider
      {...props} 
      value={{ state, dispatch }} 
    />
  )
} 

export const useGameContext = () => useContext(GameContext)