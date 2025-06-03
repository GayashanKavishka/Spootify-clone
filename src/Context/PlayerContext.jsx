import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();


const PlayerContextProivider = (props)=>{

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const volume = useRef();

    const [trak ,setTrack] = useState(songsData[0]);
    const [PlayStatus,setPlayStatus] = useState(false);
    const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })


    const SeekTrack =(e)=>{
        const width = seekBg.current.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (clickX/width)*duration;

    }


    const PlayTrackByID = async(id)=>{
        await setTrack(songsData[id]);
        audioRef.current.play();
        setPlayStatus(true);
    }

    const volumeControl = (e)=>{
        // const width = volume.current.offsetWidth;
        const width = 80;
        console.log("width",width);
        const clickX = e.nativeEvent.offsetX;
        console.log("clickX",clickX);
        audioRef.current.volume = clickX/width;
        volume.current.style.width = `${clickX}px`;
        console.log(e);
    }


    const play = ()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = ()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate=()=>{
                seekBar.current.style.width = `${(audioRef.current.currentTime/audioRef.current.duration)*100}%`;
                setTime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime%60),
                        minute:Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime:{
                        second:Math.floor(audioRef.current.duration%60),
                        minute:Math.floor(audioRef.current.duration/60)
                    }
                })  
            }
        },1000);
    },[audioRef])

    const NextTrack = ()=>{
        const index = songsData.indexOf(trak);
        if(index === songsData.length-1){
            setTrack(songsData[0]);
        }else{
            setTrack(songsData[index+1]);
        }
    }

    const PrevTrack = ()=>{
        const index = songsData.indexOf(trak);
        if(index === 0){
            setTrack(songsData[songsData.length-1]);
        }
        else{
            setTrack(songsData[index-1]);
        }
    }

    const contextValue ={
        audioRef,
        seekBar,
        seekBg,
        trak,
        setTrack,
        PlayStatus,
        setPlayStatus,
        time,
        setTime,
        play,pause,
        NextTrack,PrevTrack,
        SeekTrack,
        PlayTrackByID,
        volume,
        volumeControl
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProivider;