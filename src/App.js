import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

import MainNav from './components/layout/MainNavBar';

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupsPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
