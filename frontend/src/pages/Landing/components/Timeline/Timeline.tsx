import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import { request } from '../../../../utils';
import './Timeline.css';

export class Timeline extends React.Component {

  public state = {
    journals: []
  };

  constructor(props) {
    super(props);
  }

  public async componentWillMount() {

    const data = await request({
      url: 'https://localhost:3000/journal',
      method: 'GET'
    });

    const body = await data.json();

    // console.log(body);

    this.setState({
      journals: [body.file]
    });
  }

  public render(): JSX.Element {
    return (
      <div className={'timeline'}>

        <h3> Timeline </h3>

        <div>
          <ReactMarkdown source={this.state.journals[0]} />,
        </div>

      </div>
    );
  }
}
