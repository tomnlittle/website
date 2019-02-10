import * as React from 'react';
import './Brand.css'

export class Brand extends React.Component {
  render(): JSX.Element {
    return (
      <div className={'nav-brand'}>
        <table>
          <tbody>
            <tr>
              <th><img src='profile.jpg' alt={'profile picture'}/></th>
              <th>Thomas Northall-Little</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
