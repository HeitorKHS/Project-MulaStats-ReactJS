import { useParams } from 'react-router-dom';
import player from "../assets/player-cut.png";
import data from '../api/players.json';
import {getColorRating, getColorApr, getColorDpr, getColorKpr} from '../utils/colorUtils';

export default function Player()
{

    const { id } = useParams();
    const user = data.find(user => user.id ===  Number(id)); 
    const colorRating = getColorRating((user.kill/user.death).toFixed(2));
    const colorApr = getColorApr((user.assist/user.round).toFixed(2));
    const colorDpr = getColorDpr((user.death/user.round).toFixed(2));
    const colorKpr = getColorKpr((user.kill/user.round).toFixed(2));

    return (

            <div className="bg-black text-white mt-10">
                
                <div className="w-2/3 m-auto bg-[rgb(43,52,61)] flex rounded-lg">
                    <div className="p-5">
                        <img src={player}></img>
                    </div>
                    <div>
                        <div className="flex flex-col ml-5">
                            <div>
                                <h1 className="text-[rgb(180,183,186)] text-[30px]">{user.name} <span className="text-[40px] text-white font-bold">{user.nick}</span></h1>
                            </div>
                            <div className="flex mt-10">
                                <div className="grid grid-cols-2 gap-x-20 mr-10">
                                    <div>
                                        <h1 className="text-blue-300 text-[20px]">Rating</h1>
                                        <p className={`text-[40px] font-bold ${colorRating}`}>{(user.kill/user.death).toFixed(2)}</p>
                                    </div>
                                    <div>
                                        <h1 className="text-blue-300 text-[20px]">KPR</h1>
                                        <p className={`text-[40px] font-bold ${colorKpr}`}>{(user.kill/user.round).toFixed(2)}</p>
                                    </div>
                                    <div>
                                        <h1 className="text-blue-300 text-[20px]">APR</h1>
                                        <p className={`text-[40px] font-bold ${colorApr}`}>{(user.assist/user.round).toFixed(2)}</p>
                                    </div>
                                    <div>
                                        <h1 className="text-blue-300 text-[20px]">DPR</h1>
                                        <p className={`text-[40px] font-bold ${colorDpr}`}>{(user.death/user.round).toFixed(2)}</p>
                                    </div>   
                                </div>
                                <div className="grid grid-rows-6 gap-5 pl-10 border-l border-gray-500">
                                    <div className="flex font-bold">
                                        <div className="text-[rgb(150,150,150)]">Matches played:</div>
                                        <div className="text-[rgb(8,8,8)] pl-2">{user.match}</div>
                                    </div>
                                    <div className="flex font-bold">
                                        <div className="text-[rgb(150,150,150)]">Rounds:</div>
                                        <div className="text-[rgb(8,8,8)] pl-2">{user.round}</div>
                                    </div>
                                    <div className="flex font-bold">
                                        <div className="text-[rgb(150,150,150)]">Kills:</div>
                                        <div className="text-[rgb(8,8,8)] pl-2">{user.kill}</div>
                                    </div>
                                    <div className="flex font-bold">
                                        <div className="text-[rgb(150,150,150)]">Deaths:</div>
                                        <div className="text-[rgb(8,8,8)] pl-2">{user.death}</div>
                                    </div>
                                    <div className="flex font-bold">
                                        <div className="text-[rgb(150,150,150)]">Assists:</div>
                                        <div className="text-[rgb(8,8,8)] pl-2">{user.assist}</div>
                                    </div>
                                    <div className="flex font-bold">
                                        <div className="text-[rgb(150,150,150)]">MVPs:</div>
                                        <div className="text-[rgb(8,8,8)] pl-2">{user.mvp}</div>
                                    </div>  
                                </div>
                            </div>
                        </div>        
                    </div>

                </div>
                
            </div>
      

    );
}