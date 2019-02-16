import * as React from 'react';

import { IJournal } from '@tomnlittle/types';
import { JournalEntry } from '../../../../components';
import { request } from '../../../../utils';
import { ILandingProps } from '../../ILandingProps';
import './Timeline.css';

export class Timeline extends React.Component<ILandingProps> {

  public state = {
    journals: [],
    years: []
  };

  constructor(props) {
    super(props);
  }

  public async componentWillMount() {

    const data = await request({
      url: 'http://localhost:3000/api/journal',
      method: 'GET'
    });

    const body = await data.json();
    const years = Object.keys(body).sort((prev, curr) => curr < prev ? -1 : 1);

    this.setState({
      journals: body,
      years,
    });
  }

  public render(): JSX.Element {
    return (
      <div className={'timeline'}>

        { this.state.years.length !== 0 && this.state.years.map((year, idx) => {

          const journals: IJournal[] = this.state.journals[year];

          const filteredJournals = journals.filter((journal) => {
            return this.props.experience && journal.config.experience || this.props.projects && journal.config.project;
          });

          if (filteredJournals.length === 0) {
            return (
              <h1> No Posts to show for { year } :/ </h1>
            );
          }

          return (
            <div key={idx}>

              <h1>{year}</h1>
              <small>{filteredJournals.length} posts</small>

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
