import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Movie from "./components/Movie";


function App() {

  return (
<Router>
    <div className="App">
        <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/movie/:id" component={Movie}/>
        <Route component={Page404}/>
      </Switch>
        <Footer/>
    </div>
</Router>
  );

}

export default App;
