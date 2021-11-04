import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from './redux/actions'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
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
        <React.Fragment>
        <CssBaseline />
        <Container>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/movie/:id" component={Movie}/>
        <Route component={Page404}/>
      </Switch>
      </Container>
    </React.Fragment>
        <Footer/>
    </div>
</Router>
  );

}

export default App;
