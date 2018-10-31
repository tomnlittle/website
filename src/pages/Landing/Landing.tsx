import * as React from 'react';
import { Card } from '../../components/Card';
import './Landing.css';

export class Landing extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'landing'}>
        <div className={'main-block'}>

          <Card className={'profile-card'}>
            <img src='profile/high.jpg' height={512} alt={'profile picture'}/>
            <span>
              Computer Science UNSW <br/>
              Major AI
            </span>
          </Card>


          <Card className={'skew-card-right'}>
            hmm
          </Card>


        </div>

      </div>
    );
  }
}
