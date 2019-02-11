import * as React from 'react';

import { JournalEntry } from '../../../../components';
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
      journals: body
    });
  }

  public render(): JSX.Element {
    return (
      <div className={'timeline'}>

        { Object.keys(this.state.journals).length !== 0 && Object.keys(this.state.journals).map((year, idx) => {

          const journals = this.state.journals[year];

          return (
            <div key={idx}>

              <h1>{year}</h1>

              {journals.map((journal, kdx) => <JournalEntry key={kdx} {...journal} ></JournalEntry>)}
            </div>
          );
        })}

      </div>
    );
  }
}
