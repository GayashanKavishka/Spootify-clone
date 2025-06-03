import React, { useContext } from 'react'
import {songsData,assets} from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const Player = () => {
    const{trak,time,seekBar,seekBg,PlayStatus,play,pause,NextTrack,PrevTrack,SeekTrack,volume,volumeControl} = useContext(PlayerContext);
    
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className = 'hidden lg:flex items-center gap-4'>
        <img className = "w-12" src={trak.image} alt =""></img>
        <div>
            <p>{trak.name}</p>
            <p>{trak.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
            <img className ='w-4 cursor-pointer'src={assets.shuffle_icon} alt=""/>
            <img onClick={PrevTrack} className  ='w-4 cursor-pointer'src={assets.prev_icon} alt=""/>
            {PlayStatus ?
                 <img onClick={pause} className ='w-4 cursor-pointer'src={assets.pause_icon} alt=""/>
            :
            <img onClick={play}  className ='w-4 cursor-pointer'src={assets.play_icon} alt=""/>
            }
            <img onClick={NextTrack} className ='w-4 cursor-pointer'src={assets.next_icon} alt=""/>
            <img className ='w-4 cursor-pointer'src={assets.loop_icon} alt=""/>
        </div>
        <div className='flex items-center gap-5'>
            <p>{time. currentTime.minute}:{time. currentTime.second}</p>
            <div onClick={SeekTrack} ref ={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
               <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className ='w-4 cursor-pointer'src={assets.plays_icon} alt=""/>
            <img className ='w-4 cursor-pointer'src={assets.mic_icon} alt=""/>
            <img className ='w-4 cursor-pointer'src={assets.queue_icon} alt=""/>
            <img className ='w-4 cursor-pointer'src={assets.speaker_icon} alt=""/>
            <img className ='w-4 cursor-pointer'src={assets.volume_icon} alt=""/>
            <div onClick ={volumeControl} className='w-20 h-1 cursor-pointer'>
                <div ref ={volume}  className = 'w-17  bg-slate-50 h-1 rounded cursor-pointer'></div>
            </div>
            <img className ='w-4 cursor-pointer'src={assets.mini_player_icon} alt=""/>
            <img className ='w-4 cursor-pointer'src={assets.zoom_icon} alt=""   />
        </div>
    </div>
  )
}

export default Player
