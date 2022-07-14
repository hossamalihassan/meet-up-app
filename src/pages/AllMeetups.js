import { useState, useEffect } from 'react';

import MeetupList from "../components/meetups/MeetupList";
import classes from '../components/layout/MainStyling.module.css';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      fetch(
        'https://react-meet-up-a0713-default-rtdb.firebaseio.com/meetups.json'
        )
          .then(response => {
            return response.json();
          })
          .then((data) => {
            const meetups = [];

            for(const key in data) {
              const meetup = {
                id: key,
                ...data[key]
              };

              meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedData(meetups);
          }
        );
    }, []);

    if(isLoading) {
      return <section>
        <h1 className={classes.heading}>Loading.....</h1>
      </section>
    }

    return <section>
        <h1 className={classes.heading}>All Meetups</h1>
        <MeetupList meetups={loadedData} />
    </section>
}

export default AllMeetupsPage;