import * as React from 'react';

import { JournalEntry } from '../../../../components';
import { request } from '../../../../utils';
import { ILandingProps } from '../../ILandingProps';
import './Timeline.css';

export class Timeline extends React.Component<ILandingProps> {

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

    this.setState({
      journals: body
    });
  }

  public render(): JSX.Element {
    return (
      <div className={'timeline'}>

        { Object.keys(this.state.journals).length !== 0 && Object.keys(this.state.journals).map((year, idx) => {

          const journals: any = this.state.journals[year];

          const filteredJournals = journals.filter((journal) => {
            return this.props.experience && journal.experience || this.props.projects && journal.project;
          });

          return (
            <div key={idx}>

              <h1>{year}</h1>

              {filteredJournals.map((journal, kdx) => {
                  return <JournalEntry key={kdx} {...journal} ></JournalEntry>;
                })
              }
            </div>
          );
        })}

      </div>
    );
  }
}
