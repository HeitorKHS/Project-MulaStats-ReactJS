import Mula from "../assets/mula.png";

export default function Main()
{
    return(

    <div className="flex flex-grow bg-black items-center justify-center">
            <div className="w-3/4 flex items-center bg-[rgb(17,17,17)] rounded-xl m-5">
                <div className="p-5">
                    <div className="flex items-center justify-center md:justify-start">
                        <h1 className="text-xl md:text-7xl text-white">Welcome to <br/><span className="text-xl md:text-8xl font-bold text-blue-800">MulaStats</span></h1>
                        <img src={Mula} className="block md:hidden h-[50px] pl-3"/>
                    </div>
                    <h2 className="text-xl md:text-4xl text-[rgb(83,83,83)]"><br/>Here you will see the CS2 statistics of a group of friends who are mules.</h2>
                </div>
                <img className="hidden md:block md:h-[400px]" src={Mula}/>           
            </div>
    </div>
        
    )
}