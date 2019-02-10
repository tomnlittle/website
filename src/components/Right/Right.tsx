import * as React from 'react';
import './Right.css'

export class Right extends React.Component {
  render(): JSX.Element {
    return (
      <div className={'nav-right'}>
        {this.props.children}
      </div>
    );
  }
}
