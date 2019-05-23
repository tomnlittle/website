import React from "react";

import "./Projects.css";

interface IProjectsState {
  showPanel: boolean;
}

export default class Projects extends React.Component<{}, IProjectsState> {

  constructor(props: any) {
    super(props);

    this.state = {
      showPanel: false,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
          Projects here
      </div >
    );
  }
}
