import * as React from 'react';
import './Brand.css'

export class Brand extends React.Component {
  render(): JSX.Element {
    return (
      <div className={'nav-brand'}>
        {this.props.children}
      </div>
    );
  }
}
