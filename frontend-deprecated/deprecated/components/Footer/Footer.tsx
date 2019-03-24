import * as React from 'react';
import './Footer.css';

export class Footer extends React.Component {

  public render(): JSX.Element {
    return (
      <div className={'footer'}>
        <div>
          © Copyright {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}