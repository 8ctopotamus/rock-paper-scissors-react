
import { FaSkull, FaTrophy } from 'react-icons/fa';

const GameOver = ({ humanLives, reset }) => {
  console.log('hl',humanLives)
  return (
    <div className='game-over'>
      {humanLives === 0 ? (
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
  )
}

export default GameOver