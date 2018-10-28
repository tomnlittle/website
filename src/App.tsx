import * as React from 'react';
import Routes from './routes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const App = () => (
  <div>
    <NavBar/>
    <Routes/>
  </div>
);

export default App;
