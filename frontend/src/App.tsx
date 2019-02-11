import * as React from 'react';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Routes } from './routes';

export const App = () => (
  <div>
    <NavBar/>
    <Routes/>
    <Footer/>
  </div>
);
