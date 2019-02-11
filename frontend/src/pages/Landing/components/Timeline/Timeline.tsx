import * as React from 'react';

import { request } from '../../../../utils';
import './Timeline.css';

export class Timeline extends React.Component {

  async componentWillMount() {
    console.log('about to mount');

    const data = await request({
      url: 'https://localhost:3000/',
      method: 'GET'
    })

    console.log({ data })

  }

  componentDidMount() {
    console.log('component mounted')
  }

  render(): JSX.Element {
    return (
      <div className={'timeline'}>

        <h3> Timeline </h3>

        asdcas

      </div>
    );
  }
}
