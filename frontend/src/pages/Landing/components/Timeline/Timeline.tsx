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

    console.error(body);

    this.setState({
      journals: [body.file]
    });
  }

  public render(): JSX.Element {
    return (
      <div className={'timeline'}>

        <h3> Timeline </h3>

        { this.state.journals.length !== 0 && this.state.journals.map((entry, idx) => {
          return (
          <div key={idx} className={'journal-entry'}>
            <ReactMarkdown source={entry} />,
          </div>
          );
        })}

      </div>
    );
  }
}
