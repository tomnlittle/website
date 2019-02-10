import * as React from 'react';
// import { DisplayCard } from './components/DisplayCard';
import './Landing.css';

import { Card } from '../../components'


export class Landing extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'landing'}>

        <div className={'container'}>
          <a href=''>
            <Card className={'profile-card right'}>
              Experience
            </Card>
          </a>
        </div>

        <div className={'container'}>
          <a href='/'>
            <Card className={'profile-card left'}>
              Projects
            </Card>
          </a>
        </div>
      </div>
    );
  }
}
