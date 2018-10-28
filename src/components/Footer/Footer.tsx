import * as React from 'react';
import './Footer.css';

export class Footer extends React.Component {

  render(): JSX.Element {
    return (
      <footer className={'footer'}>
        {/* <div className={'right'}> */}
          © Copyright {new Date().getFullYear()}
        {/* </div> */}
      </footer>
    );
  }
}
