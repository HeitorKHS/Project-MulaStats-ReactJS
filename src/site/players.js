import { Link } from 'react-router-dom';
import player from "../assets/player.png";
import data from '../api/players.json';
import cs from "../assets/cs.png";
import cs2 from "../assets/cs2-bg.png";
import Nav from "../components/Nav";
import Players from "../components/Players";

export default function MinhasRotas()
{
    return(

        <div className="bg-black">

            <Nav/>
            <Players/>
             
        </div>

    )
}