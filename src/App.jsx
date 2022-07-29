import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ROUTES } from './Constants/ROUTES';

import Home from './containers/Home';
import AboutUs from './containers/AboutUs';
import Games from './containers/Games';
import NotFound from './containers/NotFound';
import { ReactComponent as Helmet } from './assets/helmet.svg';

const App = () => (
  <> 
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path={ROUTES.home} element={<Home/>} />
        <Route exact path={ROUTES.games} element={<Games/>} />
        <Route exact path={ROUTES.about} element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
    <Helmet />
  </>
);

export default App;