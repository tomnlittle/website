import * as React from 'react';
import './Header.css'

export class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
