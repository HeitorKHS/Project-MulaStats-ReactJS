import { Link } from 'react-router-dom';
import Player from "../assets/player.png";
import Data from '../api/players.json';
import Cs from "../assets/cs.png";
import Cs2 from "../assets/cs2-bg.png";

export default function Players()
{
    return(
        <div className="flex-grow bg-black">
            <div className="w-3/4 mx-auto text-white m-5">
                <h1 className="text-2xl md:text-6xl text-center m-5 md:m-10">Players</h1>
                    {
                        Data.map((player)=> (

                        <Link key={player.id} to={`/player/${player.id}`}>
                            <div className="flex rounded-xl p-2 md:p-4 mt-5 bg-cover bg-no-repeat" style={{
                                    backgroundImage: `url(${Cs2})`
                                }}>

                                <div className="hidden md:block h-[170px] w-[150px] rounded">
                                    <img class="object-fill h-full w-full rounded" src={Player} />
                                </div>
                                <div className="ml-5">
                                    <h1 className="font-bold text-sm md:text-3xl">{player.nick}</h1>
                                    <p className="text-[rgb(143,163,176)] text-sm md:text-xl">{player.name}</p>
                                </div>
                                <div className="flex flex-grow justify-end ">
                                    <img src={Cs} className="h-[20px] md:h-[40px] rounded" />
                                </div>
                            </div>
                        </Link>

                    ))}

            </div>
        </div>
    )
}