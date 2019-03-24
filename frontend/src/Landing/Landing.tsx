import * as React from 'react';
import anime from 'animejs'

import './Landing.css';

export class Landing extends React.Component {

  public constructor(props) {
    super(props);

    // console.log({ anime})
    // anime({
    //   targets: 'div',
    //   translateX: 250,
    //   rotate: '1turn',
    //   backgroundColor: '#FFF',
    //   duration: 800
    // });

  }
  public render(): JSX.Element {
    return (
      <div className={'landing'}>
        {/* Left side */}
        <div className={'left'}>

        </div>

        {/* Right Side */}
        <div className={'right'}>



        </div>
      </div>
    );
  }
}
