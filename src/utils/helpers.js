import { FaHandRock, FaHandPaper, FaHandScissors, FaQuestion } from 'react-icons/fa'
import { choices } from './constants'

export const getComputerChoice = () => choices[Math.floor(Math.random()*choices.length)]

export const renderChoiceIcon = (choice, props) => {
  let Icon = FaQuestion
  switch(choice) {
    case 'r':
      Icon = FaHandRock
      break
    case 'p':
      Icon = FaHandPaper
      break
    case 's':
      Icon = FaHandScissors
      break
  }
  return <Icon {...props} />
}