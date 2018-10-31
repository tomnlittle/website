import * as React from 'react';
import { GitHub, Linkedin } from 'react-feather';
import './Footer.css';

export class Footer extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'footer'}>
        <div className={'footer-left'}>
          <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">
            <Linkedin className={'footer-icon'}/>
          </a>
          <a href="https://github.com/tomnlittle">
            <GitHub className={'footer-icon'}/>
          </a>
        </div>
        <div className={'footer-right'}>
          © Copyright {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}
