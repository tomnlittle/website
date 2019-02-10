import * as React from 'react';
import { DisplayCard } from './components/DisplayCard';
import './Landing.css';

export class Landing extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'landing main-block'}>
        <DisplayCard/>
      </div>
    );
  }
}
