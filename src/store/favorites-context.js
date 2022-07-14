import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (meetupID) => {},
    isItemFav: (meetupID) => {}
});

export function FavoritesContextProvider(props) {

    const [userFavs, setUserFavs] = useState([]);

    function addFavHandler(meetup) {
        setUserFavs((prevUserFav) => {
            return prevUserFav.concat(meetup)
        })
    }

    function removeFavHandler(meetupID) {
        setUserFavs((prevUserFav) => {
            return prevUserFav.filter(meetup => meetup.id !== meetupID)
        })
    }

    function isItemFavHandler(meetupID) {
        return userFavs.some(meetup => meetup.id === meetupID)
    }

    const context = {
        favorites: userFavs,
        totalFavorites: userFavs.length,
        addFavorite: addFavHandler,
        removeFavorite: removeFavHandler,
        isItemFav: isItemFavHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;