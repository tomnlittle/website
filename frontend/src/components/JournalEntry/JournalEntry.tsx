import * as moment from 'moment';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import { Card } from '../Card';
import './JournalEntry.css';

interface IJournal {
  date: Date;
  file: string;
  tags: string[];
}

export class JournalEntry extends React.Component <IJournal>  {

  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <Card className={'journal-entry'}>
        <small> { moment(this.props.date).format('MMMM Do') } </small>
        <ReactMarkdown source={this.props.file} />,
      </Card>
    );
  }
}
