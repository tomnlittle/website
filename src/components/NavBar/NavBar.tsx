import * as React from 'react';
import { Link } from 'react-router-dom';
import { GitHub, Linkedin } from 'react-feather';

import { Brand } from './components/Brand';
import { Right } from './components/Right';


import './NavBar.css'

export class NavBar extends React.Component {
  render(): JSX.Element {
    return (
      <nav className={'nav-custom'}>
          <Brand>
            <Link to='/'>
              <span>Thomas Northall-Little</span>
            </Link>
          </Brand>
          <Right>
            <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">
              <Linkedin className={'nav-icon'}/>
            </a>
            <a href="https://github.com/tomnlittle">
              <GitHub className={'nav-icon'}/>
            </a>
          </Right>
      </nav>
    );
  }
}
