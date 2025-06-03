import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItems from './AlbumItems';
import SongItem from './SongItem';

const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
            {/* Scrollable Album Container */}
            <div className="overflow-x-auto">
            <div className="flex min-w-[1000px]">
                {albumsData.map((item) => (
                <AlbumItems
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    desc={item.desc}
                    id={item.id}
                />
                ))}
            </div>
            </div>
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
            {/* Scrollable Album Container */}
            <div className="overflow-x-auto">
            <div className="flex min-w-[1000px]">
                {songsData.map((item) => (
                <SongItem
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    desc={item.desc}
                    id={item.id}
                />
                ))}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

