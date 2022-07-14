import classes from '../components/layout/MainStyling.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import FavoritesContext from '../store/favorites-context';

import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

    const favs = useContext(FavoritesContext);

    let content;

    if(favs.totalFavorites === 0){
        content = <p className={classes.warning}>There's no favorites...</p>
    } else {
        content = <MeetupList meetups={favs.favorites} />
    }

    return <section>
        <h1 className={classes.heading}>Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;