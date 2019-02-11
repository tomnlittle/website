import * as React from 'react';
import { GitHub, Linkedin, File } from 'react-feather';

import './Right.css'

export class Right extends React.Component {
  render(): JSX.Element {
    return (
      <div className={'nav-right'}>
        <table>
          <tbody>
            <tr>
              <th><a href='/'>Resume<File/></a></th>
              <th><a href="https://www.linkedin.com/in/thomas-northall-little-073604111"><Linkedin/></a></th>
              <th><a href="https://github.com/tomnlittle"><GitHub/></a></th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
