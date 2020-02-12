import React, {Component} from 'react';
import {HashRouter , Switch, Route} from 'react-router-dom'
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
                <HashRouter>
                    <div className="App">
                        <NavBar/>
                        <Switch>
                            <Switch>
                                <Route exact path='/' component={SearchPage}/>
                                <Route exact path='/favourites' component={FavouritePage}/>
                            </Switch>
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;