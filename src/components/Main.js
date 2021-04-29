import React from 'react';
import {Route, Switch} from "react-router-dom";
import Features from "./Features";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";

function Main() {
    return (
        <div className='main row'>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/features' component={Features}/>
                <Route path='/contact' component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}

export default Main;