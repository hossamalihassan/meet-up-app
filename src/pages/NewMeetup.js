import { useNavigate } from 'react-router-dom';

import classes from '../components/layout/MainStyling.module.css';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addNewMeetupHandler(newMeetupData) {
        fetch('https://react-meet-up-a0713-default-rtdb.firebaseio.com/meetups.json',
              {
                method: 'POST',
                body: JSON.stringify(newMeetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
              }
            ).then(() => {
                navigate('/', {replace: true});
            });
    }

    return <section>
        <h1 className={classes.heading}>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
    </section>
}

export default NewMeetupsPage;