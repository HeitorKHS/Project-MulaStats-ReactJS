import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./site/home";
import Players from "./site/players";
import Player from "./site/player";
import Maps from "./site/maps";
import AttPlayers from "./site/att";

export default function MinhasRotas()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/players" element={<Players/>}/>
                <Route path="/player/:id" element={<Player/>}/>
                <Route path="/maps" element={<Maps/>}/>
                <Route path="/attplayers" element={<AttPlayers/>}/>
            </Routes>
        </BrowserRouter>
    );
}