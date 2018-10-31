import * as React from 'react';
import { Terminal } from 'react-feather';
import { Card } from '../../components/Card';
import './404.css';

export class NotFound extends React.Component<any, any > {

  render(): JSX.Element {
    return (
      <Card>
        <Terminal className={'error-icon'} />
        <div className={'error'}>
          Not Found
          <p>Sorry we couldn't find that page...</p>
        </div>
      </Card>
    );
  }
}
