import * as React from 'react';
import { GitHub, Linkedin } from 'react-feather';
import './Footer.css';

import { Right } from '../Right';

export class Footer extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'footer'}>
        <Right>
          <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">
            <Linkedin className={'footer-icon'}/>
          </a>
          <a href="https://github.com/tomnlittle">
            <GitHub className={'footer-icon'}/>
          </a>
        </Right>

        <div>
          © Copyright {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}
