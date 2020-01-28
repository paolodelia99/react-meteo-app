import React, {Component} from 'react';
import { connect } from 'react-redux'

class FavouritePage extends Component {
    render() {
        const {favourites} = this.props;
        console.log(favourites);
        const favouritesList = favourites.map(fav => (
            <li>{fav.cityName}</li>
            ));

        return (
            <div>
                <div className="text-light">
                    <h3 className="text-white py-3">Your favorites</h3>
                    {favourites ?
                        <ul className="list-group">{favouritesList}</ul>
                    : (<h3>Not favourites yet</h3>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favourites: state.favourites
});

export default connect(mapStateToProps)(FavouritePage);
