import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import LandingView from "./view/landingView/LandingView";

function App(){
return (
    <div >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingView/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default App;