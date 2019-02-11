import * as React from 'react';

import { ButtonBar, Timeline } from './components';
import './Landing.css';

export class Landing extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'landing'}>
        <ButtonBar/>
        <Timeline/>
      </div>
    );
  }
}