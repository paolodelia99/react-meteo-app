import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import FavouritePage from "./components/FavouritePage";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <Switch>
                        <Route exact path='/' component={SearchPage}/>
                        <Route exact path='/favourites' component={FavouritePage}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
