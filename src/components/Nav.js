import Logo from "../assets/logo.png";
import Capacete from "../assets/capacete.png";

export default function Nav()
{
    return(

        <nav className="max-w-screen md:grid md:grid-cols-3 bg-[rgb(17,17,17)] items-center text-white  text-sm md:text-xl">
            
            <ul className="flex justify-center md:justify-end items-center space-x-3 md:space-x-7 md:col-start-1">
                <img src={Capacete} className="block md:hidden w-[40px] h-[30px]"></img>
                <li><a href="/">Home</a></li>
                <li><a href="/players">Players</a></li>
                <li><a href="/maps">Map Pool</a></li>
            </ul>
            <img src={Logo} className="mx-auto hidden md:block col-start-2"></img>
        </nav>
        
    )
}