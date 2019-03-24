import * as React from 'react';
import { Mail, GitHub, Linkedin } from 'react-feather';

import './Right.css';

export class Right extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={'nav-right'}>
        <table>
          <tbody>
            <tr>
              <th><a href='mailto:hello@tomnlittle.com'><Mail/></a></th>
              <th><a href='https://www.linkedin.com/in/thomas-northall-little-073604111'><Linkedin/></a></th>
              <th><a href='https://github.com/tomnlittle'><GitHub/></a></th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
