import * as React from 'react';

import { Brand, Right } from './components';
import './NavBar.css'

export class NavBar extends React.Component {
  render(): JSX.Element {
    return (
      <div className={'navbar'}>
        <Brand/>
        <Right/>
      </div>
    );
  }
}
