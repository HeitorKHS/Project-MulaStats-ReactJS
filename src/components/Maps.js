import React from 'react';
import MapsData from '../api/maps.json';

export default function Maps() {

        const maps = [...MapsData].sort((a, b) => b.played - a.played);
    
        return (
            <>
                <div className="flex flex-col mt-5 items-center">
                    <h1 className="text-white text-[70px]">Map highlight</h1>
                    <div className="mt-5 mb-10 grid grid-cols-2 gap-4">
                    {
                        maps.map((map) => (
                        <div className="flex flex-col h-[250px] w-[450px] bg-[rgb(17,17,17)] border border-gray-500">
                            <div className="flex items-end justify-center h-[100px] text-[20px] text-white"
                            style={{
                                backgroundImage: `url(${map.img})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%'
                            }}>
                                <h1 className='mb-2 w-full bg-black bg-opacity-70 text-center'>{map.name}</h1>
                            </div>
                            <div className="grid grid-rows-4 h-full text-white">
                                <div className="border-t border-gray-500 flex items-center pl-3">Played: {map.played}</div>
                                <div className="border-t border-gray-500 flex items-center pl-3">Wins/Losses: {map.wins}/{map.losses}</div>
                                <div className="border-t border-gray-500 flex items-center pl-3">Win Rate: {map.played > 0 ? (100 * map.wins / map.played).toFixed(1) : '0.0'} %</div>
                                <div className="border-t border-gray-500 flex items-center pl-3">Total Rounds: {map.rounds}</div>
                            </div>
                        </div>
                        
                    ))}
                    </div>
                </div>
            </>
        )
}