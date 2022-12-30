import React from 'react';
import { Switch , Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './shared/Header/Header';
import SearchBox from './components/Search/SearchBox';
import SavedMovies from './components/SavedMovies/SavedMovies';
import PopularMovies from './components/PopularMovies/PopularMovies';

const App = () => {
    return (
      <div className="App">
        <Header />
        <main>
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
        </main>
      </div>
    );
}

export default App;