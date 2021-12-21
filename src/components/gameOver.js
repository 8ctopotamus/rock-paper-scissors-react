import { FaTrophy, FaSkullCrossbones } from "react-icons/fa"
import { actions, useGameContext } from "../context/gameContext"

const GameOver = ({ humanLives, reset }) => {
  const { dispatch } = useGameContext()

  return (
    <div className="game-over">
      {humanLives === 0 ? (
        <>
          <FaSkullCrossbones size={100} />
          <h2>YOU LOSE</h2>
        </>
      ) : (
        <>
          <FaTrophy size={100} />
          <h2>YOU WON</h2>
        </>
      )}
      <button onClick={() => {
        dispatch({ type: actions.RESET })
      }}>PLAY AGAIN</button>
    </div>
  )
}

export default GameOver