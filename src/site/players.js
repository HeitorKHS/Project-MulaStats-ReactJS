import Nav from "../components/Nav";
import ListPlayer from "../components/Players";

export default function Players()
{
    return(

        <div className="flex flex-col h-screen">
            <Nav/>
            <ListPlayer/>
        </div>

    )
}