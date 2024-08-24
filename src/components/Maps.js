import React from 'react';
import Data from '../api/maps.json';

export default function Maps()
{

    const maps = [...Data].sort((a, b) => b.played - a.played);

    return(
        <div className="flex-grow bg-black">
            <div className="w-3/4 mx-auto text-white">
                <h1 className="text-2xl md:text-6xl text-center m-10">Map highlight</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 mb-5">
                    {
                        maps.map((map) => (

                        <div className="border border-gray-500">
                            <div className="flex items-end h-[70px] md:h-[100px] bg-cover bg-no-repeat bg-center bg-[length:100%]"
                            style={{backgroundImage: `url(${map.img})`
                            }}> 
                                <h1 className='mb-2 w-full bg-black bg-opacity-70 text-center md:text-xl'>{map.name}</h1>
                            </div>
                            <div className="bg-[rgb(17,17,17)]">
                                <p className="text-sm md:text-base border-t border-gray-500 flex items-center p-3">Played: {map.played}</p>
                                <p className="text-sm md:text-base border-t border-gray-500 flex items-center p-3">Wins/Losses: {map.wins}/{map.losses}</p>
                                <p className="text-sm md:text-base border-t border-gray-500 flex items-center p-3">Win Rate: {map.played > 0 ? (100 * map.wins / map.played).toFixed(1) : '0.0'} %</p>
                                <p className="text-sm md:text-base border-t border-gray-500 flex items-center p-3">Total Rounds: {map.rounds}</p>
                            </div>
                        </div>
                    
                    ))}
                </div>
            </div>
        </div>
    )
}