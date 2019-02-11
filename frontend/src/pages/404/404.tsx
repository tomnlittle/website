import * as React from 'react';
import { Terminal } from 'react-feather';
import { Card } from '../../components/Card';
import './404.css';

export class NotFound extends React.Component<any, any > {

  public render(): JSX.Element {
    return (
      <Card className={'error'}>
        <div>
          <Terminal className={'error-icon'} />
        </div>
        Not Found
        <p>Sorry we couldn't find that page...</p>
      </Card>
    );
  }
}
