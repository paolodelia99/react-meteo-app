import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import NavBar from "./components/NavBar";
import SearchPage from "./components/SearchPage";
import FavouritePage from "./components/FavouritePage";
import {Provider} from 'react-redux';
import store from './store'

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <NavBar/>
                        <Switch>
                            <Route exact path='/' component={SearchPage}/>
                            <Route exact path='/favourites' component={FavouritePage}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
