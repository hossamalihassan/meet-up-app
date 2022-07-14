import { useContext } from 'react';

import classes from './MeetupItem.module.css';

import Card from '../ui/Card';

import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {

    const favCtx = useContext(FavoritesContext);

    const itemIsFav = favCtx.isItemFav(props.id);

    function toggleFavStatusHandler() {
        if(itemIsFav) {
            favCtx.removeFavorite(props.id);
        } else {
            favCtx.addFavorite({
                id: props.id,
                address: props.address,
                image: props.image,
                description: props.description,
                title: props.title
            })
        }
    }

    return <Card>
     <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavStatusHandler}>
                {itemIsFav ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    </li>
    </Card>
}

export default MeetupItem;