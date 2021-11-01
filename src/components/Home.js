import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Filmcard from "./Filmcard";
function Home() {
    let mowies =["13","12","11","10","9","8","7","6","5","4"];
    return(
    <div className={"container"}>
        {mowies.map(mov => (
            <Link to={`/movie/${mov}`}><div className={"card"}><Filmcard/></div></Link>
        ))}
     </div>
    )
}
export  default  Home