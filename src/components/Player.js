import { useParams } from 'react-router-dom';
import PhotoPlayer from "../assets/player.png";
import Data from '../api/players.json';
import {getColorRating, getColorApr, getColorDpr, getColorKpr} from '../utils/colorUtils';

export default function Player()
{

    const { id } = useParams();
    const player = Data.find(player => player.id ===  Number(id));
    const colorRating = getColorRating((player.kill/player.death).toFixed(2));
    const colorApr = getColorApr((player.assist/player.round).toFixed(2));
    const colorDpr = getColorDpr((player.death/player.round).toFixed(2));
    const colorKpr = getColorKpr((player.kill/player.round).toFixed(2));

    return(

        <div className="flex flex-grow bg-black items-center justify-center text-white">
            <div className="flex m-10 gap-5">
                <div className="hidden md:flex bg-[rgb(12,12,12)] p-8 rounded-xl">
                    <div className="flex bg-black rounded">
                        <img className="object-cover" src={PhotoPlayer} /> 
                    </div>                
                </div>
                <div className="flex flex-col bg-[rgb(12,12,12)] rounded-xl gap-10 p-5">
                    <div>
                        <h1 className="text-[rgb(180,183,186)] text-sm md:text-4xl">{player.name}<span className="text-sm md:text-5xl text-white font-bold"> {player.nick}</span></h1>
                    </div>
                    <div>
                        <div className="flex gap-10 mb-10">
                            <div>
                                <h1 className="text-sm md:text-lg text-[rgb(180,183,186)]">Rating</h1>
                                <p className={`text-sm md:text-4xl font-bold ${colorRating}`}>{(player.kill/player.death).toFixed(2)}</p>
                            </div>
                            <div>
                                <h1 className="text-sm md:text-lg text-[rgb(180,183,186)]">KPR</h1>
                                <p className={`text-sm md:text-4xl font-bold ${colorKpr}`}>{(player.kill/player.round).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div>
                                <h1 className="text-sm md:text-lg text-[rgb(180,183,186)]">APR</h1>
                                <p className={`text-sm md:text-4xl font-bold ${colorApr}`}>{(player.kill/player.round).toFixed(2)}</p>
                            </div>
                            <div>
                                <h1 className="text-sm md:text-lg text-[rgb(180,183,186)]">DPR</h1>
                                <p className={`text-sm md:text-4xl font-bold ${colorDpr}`}>{(player.kill/player.round).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex flex-col justify-center items-center bg-[rgb(28,28,28)] md:h-[100px] md:w-[100px] rounded-xl">
                            <h1 className="text-sm md:text-[rgb(179,179,179)]">Matches</h1>
                            <p className="text-sm md:text-2xl font-bold">{player.match}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-[rgb(28,28,28)] md:w-[100px] rounded-xl">
                            <h1 className="text-sm md:text-[rgb(179,179,179)]">Rounds</h1>
                            <p className="text-sm md:text-2xl font-bold">{player.round}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-[rgb(28,28,28)]  md:w-[100px] rounded-xl">
                            <h1 className="text-sm md:text-[rgb(179,179,179)]">Kills</h1>
                            <p className="text-sm md:text-2xl font-bold">{player.kill}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-[rgb(28,28,28)] md:w-[100px] rounded-xl">
                            <h1 className="text-sm md:text-[rgb(179,179,179)]">Deaths</h1>
                            <p className="text-sm md:text-2xl font-bold">{player.death}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-[rgb(28,28,28)] md:w-[100px] rounded-xl">
                            <h1 className="text-sm md:text-[rgb(179,179,179)]">Assists</h1>
                            <p className="text-sm md:text-2xl font-bold">{player.assist}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-[rgb(28,28,28)] md:w-[100px] rounded-xl">
                            <h1 className="text-sm md:text-[rgb(179,179,179)]">MVPs</h1>
                            <p className="text-sm md:text-2xl font-bold">{player.mvp}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
    )
}