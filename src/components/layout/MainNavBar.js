import { Link } from 'react-router-dom';

import { useContext } from 'react';

import classes from './MainNavBar.module.css';

import FavoritesContext from '../../store/favorites-context';
 
function MainNav() {

    const navFavCtx = useContext(FavoritesContext);
    let favsNum = navFavCtx.totalFavorites; 

    return (
     <header className={classes.header}>
        <div className={classes.logo}>Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add new meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>My favorites </Link> <spann className={classes.badge}>{favsNum}</spann>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNav;