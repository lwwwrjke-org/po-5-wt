import { useState } from 'react'

import Profile from './Components/Profile/Profile'
import Icon from './Components/Icon/Icon'
import TextIcon from './Components/TextIcon/TextIcon'
import './Assets/common.scss'

const App = () => {
  const [randomIcon, setRandomIcon] = useState('dove')

  const icons = [
    'truck-monster',
    'space-shuttle',
    'dove',
    'user-astronaut',
    'coffee',
    'beer',
    'skull'
  ]

  Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

  const changeIcon = (event) => {
    event.preventDefault();
    setRandomIcon(icons.sample())
  }
  return (
    <div className="App">
      <Icon icon={randomIcon}/>
      <button onClick={changeIcon}>Change Icon</button>
      <Profile/>
      <TextIcon/>
    </div>
  );
}

export default App