import * as React from 'react';
import { Card } from '../../../../components/Card';
import './DisplayCard.css';

export class DisplayCard extends React.Component {

  render(): JSX.Element {
    return (
      <Card className={'profile-card'}>
        <img src='profile/low.jpg' alt={'profile picture'}/>
        <div>
          Computer Science UNSW <br/>
          Major AI
        </div>
      </Card>
    );
  }
}
