import * as React from 'react';
import './Card.css';

export class Card extends React.Component<React.HTMLAttributes<HTMLDivElement>, {}> {

  render(): JSX.Element {
    return (
      <div className={`card ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}