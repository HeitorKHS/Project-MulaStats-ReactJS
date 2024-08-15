import mula from "../assets/mula.png";

import Nav from "../components/Nav";

export default function MinhasRotas()
{
    return(

        <div className="h-screen bg-black">
            <Nav />
            <div className="flex justify-center items-center flex-row bg-[rgb(17,17,17)] m-10 mt-5 rounded-xl">
                <div className=" text-white w-1/2">
                    <h1 className="text-7xl">Welcome to <span className="text-8xl font-bold text-blue-800">MulaStats</span></h1>
                    <br></br>
                    <p className="text-4xl text-[rgb(83,83,83)]">Here you will see the CS2 statistics of a group of friends who are mules.</p>
                </div>
                <div>
                        <img src={mula}></img>
                </div>

            </div>
        </div>

    )
}
