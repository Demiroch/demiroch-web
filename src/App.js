import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import LandingView from "./view/landingView/LandingView";
import background from "./resources/Backgrounds/texture.jpg";

function App(){
return (
    <div style={{backgroundImage: `url(${background})`, height: '100%'}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingView/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default App;