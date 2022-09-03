import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news"/>
                    <Route path="/music"/>
                    <Route path="/settings"/>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;