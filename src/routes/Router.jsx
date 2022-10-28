import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Search1 from "../components/search/Search";
import Vuelos from "../components/home/Vuelos";
import Sits from "../components/sits/Sits";

import Search from "../components/search/Search";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Search />} />
                    <Route path='vuelos' element={<Vuelos/>}/>
                        <Route path='sits' element={<Sits/>}>
                    
                    </Route>
                    <Route path="*" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;