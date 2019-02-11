import * as React from 'react';
import './Left.css';

export class Left extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={'nav-left'}>
        <a href='/'>
        <table>
          <tbody>
            <tr>
              <th><img src='profile.jpg' alt={'profile picture'}/></th>
              <th>Thomas Northall-Little</th>
            </tr>
          </tbody>
        </table>
        </a>
      </div>
    );
  }
}
