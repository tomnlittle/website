import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Brand } from './components/Brand';

import './NavBar.css'

export class NavBar extends React.Component {
  render(): JSX.Element {
    return (
      <nav className={'nav-custom'}>
        <Header>
          <Brand>
            <Link to='/'>
              <span>Thomas Northall-Little</span>
            </Link>
          </Brand>
        </Header>
      </nav>
    );
  }
}
