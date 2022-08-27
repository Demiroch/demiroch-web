import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import LandingPage from "./view/landingPage/LandingPage";

function App(){
return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Header someClass={"opaque"} />}>
                    <Route path="" element={<LandingPage />}/>
                </Route> */}
                <Route path="/" element={<LandingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
)
}

export default App;