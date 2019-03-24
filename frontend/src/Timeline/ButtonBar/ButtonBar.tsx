import * as React from 'react';
import { Award, Code } from 'react-feather';

import { Card } from '../../components';
import './ButtonBar.css';

export function ButtonBar() {

  return (
    <div className={'button-bar'}>

      <div className={'container'}>
        <button onClick={this.props.toggleExperience} className={'right'}>
          <Card className={`profile-card ${this.props.experience ? '' : 'disabled' }`}>
            <div>
              <Award/>
            </div>
            <div>
              Experience
            </div>
          </Card>
        </button>
      </div>

      <div className={'container'}>
        <button onClick={this.props.toggleProjects} className={'left'}>
          <Card className={`profile-card ${this.props.projects ? '' : 'disabled'}`}>
            <div>
              <Code/>
            </div>
            <div>
              Projects
            </div>
          </Card>
        </button>
      </div>

    </div>
  );
}
