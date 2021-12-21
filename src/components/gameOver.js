import { FaTrophy, FaSkullCrossbones } from "react-icons/fa"

const GameOver = ({ humanLives, reset }) => {
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
      <button onClick={reset}>PLAY AGAIN</button>
    </div>
  )
}

export default GameOver