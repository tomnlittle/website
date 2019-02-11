import * as React from 'react';

import { ButtonBar, Timeline } from './components';
import './Landing.css';

export class Landing extends React.Component {

  public state = {
    experience: true,
    projects: true
  };

  public constructor(props) {
    super(props);

    this.toggleExperience = this.toggleExperience.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);
  }

  public toggleExperience() {
    this.setState({
      experience: !this.state.experience
    });
  }

  public toggleProjects() {
    this.setState({
      projects: !this.state.projects
    });
  }

  public render(): JSX.Element {
    return (
      <div className={'landing'}>
        <ButtonBar {...this.state} toggleExperience={this.toggleExperience} toggleProjects={this.toggleProjects}/>
        <Timeline {...this.state} toggleExperience={this.toggleExperience} toggleProjects={this.toggleProjects}/>
      </div>
    );
  }
}
