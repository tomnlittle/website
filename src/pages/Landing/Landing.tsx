import * as React from 'react';
// import { DisplayCard } from './components/DisplayCard';
import './Landing.css';

import { Card } from '../../components'


export class Landing extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'landing'}>
        <Card className={'profile-card'}>
          hello
        </Card>
        <Card className={'profile-card'}>
          hello
        </Card>
      </div>
    );
  }
}
