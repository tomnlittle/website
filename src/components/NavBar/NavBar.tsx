import * as React from 'react';
import { Link } from 'react-router-dom';
import { GitHub, Linkedin, File } from 'react-feather';

import { Brand } from './components/Brand';
import { Right } from '../Right';
import { Left } from '../Left';

import './NavBar.css'

export class NavBar extends React.Component {
  render(): JSX.Element {
    return (
      <nav className={'nav-custom'}>
          <Left>
            <Link to='/'>
              <File/>
              <span style={{"float":"right"}}>Resume</span>
            </Link>
          </Left>
          <Brand>
            <Link to='/'>
              <span>Thomas Northall-Little</span>
            </Link>
          </Brand>
          <Right>
            <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">
              <Linkedin/>
            </a>
            <a href="https://github.com/tomnlittle">
              <GitHub/>
            </a>
          </Right>
      </nav>
    );
  }
}
