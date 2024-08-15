import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./site/home";
import Players from "./site/players";
import Player from "./site/player";

export default function MinhasRotas()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/players" element={<Players/>}/>
                <Route path="/player/:id" element={<Player/>}/>
            </Routes>
        </BrowserRouter>
    );
}