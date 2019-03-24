import * as React from 'react';

import { Left, Right } from './components';
import './NavBar.css';

export class NavBar extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={'navbar'}>
        {/* <Left/> */}
        <Right/>
      </div>
    );
  }
}
