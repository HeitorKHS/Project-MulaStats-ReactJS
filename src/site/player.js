import Nav from "../components/Nav";
import PlayerInfo from "../components/Player";

export default function Player()
{
    return(

        <div className="flex flex-col h-screen">
            <Nav/>
            <PlayerInfo/>  
        </div>

    )
}