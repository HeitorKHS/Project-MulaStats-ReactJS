import { Link } from 'react-router-dom';
import player from "../assets/player.png";
import data from '../api/players.json';
import cs from "../assets/cs.png";
import cs2 from "../assets/cs2-bg.png";


export default function MinhasRotas()
{
    return(

        <div className="bg-black">

            <div className=" flex flex-col mt-20">
            {
                    data.map((info) => (
                        <Link key={info.id} to={`/player/${info.id}`} className="block w-3/4 h-[200px] m-auto mb-10">
                            <div className="flex w-full h-full border-[2px] border-[rgb(26,36,49)]"
                                style={{
                                backgroundImage: `url(${cs2})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}>

                            <div className="flex flex-grow m-5 flex-col">
                                <div>
                                    <div><img src={cs} className="h-[30px]" /></div>
                                </div>
                                <div className="flex flex-grow flex-col justify-end">                                   
                                    <div className="text-white font-bold text-[35px]">{info.nick}</div>
                                    <div className="text-[rgb(143,163,176)] text-[20px]">{info.name}</div>
                                </div>
                            </div>
                            
                            <div><img src={player} className="h-[201px] ml-5" /></div>
                            </div>
                        </Link>
                        
                    ))
                }

            </div>
            
        </div>

    )
}