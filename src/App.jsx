import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {
  const {audioRef,trak} = useContext(PlayerContext);
  return (
    <h1 className="h-screen bg-black">
        <div className='h-[90%] flex '>
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={trak.file} preload='auto'></audio>
    </h1>
  )
}

export default App
