import { FaHeart, FaHeartBroken } from 'react-icons/fa'
import { renderChoiceIcon } from '../utils/helpers'

const Player = ({ name, choice, lives }) => {
  return (
    <div className='player'>
      { renderChoiceIcon(choice, { size: 80 }) }
      <h2>{name.toUpperCase()}</h2>
      <div className='lives-container'>
        {[1, 2, 3].map(i => {
          if (i <= lives) {
            return <FaHeart color="red" key={i} />
          }
          return <FaHeartBroken color="red" style={{ opacity: .45 }} key={i} />
        })}
      </div>
    </div>
  )
}

export default Player