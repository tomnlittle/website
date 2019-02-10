import * as React from 'react';
import './Left.css'

export class Left extends React.Component {
  render(): JSX.Element {
    return (
      <div className={'nav-left'}>
        {this.props.children}
      </div>
    );
  }
}
