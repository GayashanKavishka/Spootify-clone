import React,{useEffect, useRef} from 'react'
import Home from './Home'
import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

   const displayRef = useRef();
   const location = useLocation();
   const isAlbum = location.pathname.includes('album');
   const albumId = location.pathname.split('/')[2];
   console.log("albumID",albumId);
   const bgcolor = albumsData[Number(albumId)]?.bgColor;
   console.log("bgcolor",bgcolor);
   console.log("isAlbum",isAlbum);

   useEffect(() => {
     if(isAlbum){
       displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`;
       console.log("album");
     }else{
       displayRef.current.style.background = `#121212`;
     }
   })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto hidden: lg:w-[75%]  lg:ml-0 '>
       <Routes>
         <Route path ="/" element={<Home/>}></Route>
         <Route path ="/album/:id" element={<DisplayAlbum/>}></Route>
       </Routes>
    </div>
  )
}

export default Display
