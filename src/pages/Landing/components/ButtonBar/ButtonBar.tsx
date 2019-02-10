import * as React from 'react';
import { Award, Code } from 'react-feather';

import { Card } from '../../../../components'
import './ButtonBar.css';


export class ButtonBar extends React.Component {

  render(): JSX.Element {
    return (
      <div>

        <div className={'container'}>
          <a href=''>
            <Card className={'profile-card right'}>
              <div>
                <Award/>
              </div>
              <div>
                Experience
              </div>
            </Card>
          </a>
        </div>

        <div className={'container'}>
          <a href='/'>
            <Card className={'profile-card left'}>
              <div>
                <Code/>
              </div>
              <div>
                Projects
              </div>
            </Card>
          </a>
        </div>
      </div>
    );
  }
}
