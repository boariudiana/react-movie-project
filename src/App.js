import React from 'react';
import { Switch , Route, Redirect} from 'react-router-dom';
import SearchBox from './pages/Search/SearchBox';
import SavedMovies from './pages/SavedMovies/SavedMovies';
import PopularMovies from './pages/PopularMovies/PopularMovies';
import Layout from './components/Layout';

const App = () => {
    return (
      <Layout>
        <Switch>
            <Route path='/' exact>
              <Redirect to='/home'/>
            </Route>
            <Route path='/home'>
              <SearchBox />
            </Route>
            <Route path='/my-list'>
              <SavedMovies/>
            </Route>
            <Route path='/popular-movies'>
              <PopularMovies />
            </Route>
          </Switch>
      </Layout>
    );
}

export default App;