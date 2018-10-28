import * as React from 'react';
import './Card.css';

export class Card extends React.Component {

  render(): JSX.Element {
    return (
      <div className={'card'}>
        <div className={'card-child'}>
            {this.props.children}
        </div>
      </div>
    );
  }
}
