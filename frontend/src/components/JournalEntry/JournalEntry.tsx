import * as moment from 'moment';
import * as React from 'react';
import { Award, Code, GitHub } from 'react-feather';
import * as ReactMarkdown from 'react-markdown';
import { IJournal } from '@tomnlittle/types';

import { Card } from '../Card';
import './JournalEntry.css';

export class JournalEntry extends React.Component <IJournal>  {

  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <Card className={'journal-entry'}>
        { this.props.config.experience && <div className={'icon'}><Award/></div> }
        { this.props.config.project && <div className={'icon'}><Code/></div> }
        {/* { this.props.tags.length && this.props.tags.map((tag) => {
          return (
            <div className={'tag'}>
              { tag.toUpperCase() }
            </div>
          );
        })} */}
        <h1> {this.props.config.title } </h1>
        <small> { moment(this.props.config.date).format('MMMM Do') } </small>
      { this.props.config.github && <a href={ this.props.config.github }><div className={'github'}> <GitHub size={48}/> </div></a> }
        <ReactMarkdown source={this.props.file} />
      </Card>
    );
  }
}
