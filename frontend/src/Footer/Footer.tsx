import React from "react";

import "./Footer.css";

export default class Footer extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
        <div className="Footer">
          <p> Copyright { (new Date()).getFullYear() } - Thomas Northall-Little </p>
        </div>
    );
  }
}
