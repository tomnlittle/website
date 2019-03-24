import * as React from 'react';
import { IJournal } from '@tomnlittle/types';

import { REACT_APP_API_ADDRESS, REACT_APP_API_PROTOCOL } from '../config/app';
import { JournalEntry } from '../components';
import { request } from '../utils';
import { ILandingProps } from './ILandingProps';
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

    // TODO: wtf was I thinking with the below

    const data = await request({
      url: `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_ADDRESS}/api/list`,
      method: 'GET'
    });

    const fileList = await data.json();

    const journals = {};

    for (let file of fileList) {

      const fileRes = await request({
        url: `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_ADDRESS}/api/get`,
        qs: {
          path: file.path
        },
        method: 'GET'
      });

      const fileData = await fileRes.json();

      if (!journals.hasOwnProperty(file.year)) {
        journals[file.year] = [];
      }

      journals[file.year].push(fileData);
    }

    const years = Object.keys(journals).sort((prev, curr) => curr < prev ? -1 : 1);

    this.setState({
      journals,
      years
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