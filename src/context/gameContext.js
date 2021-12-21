import { createContext, useContext } from "react";

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

export const GameProvider = props => {
  return (
    <GameContext.Provider
      {...props} 
      value={defaultContext} 
    />
  )
} 

export const useGameContext = () => useContext(GameContext)