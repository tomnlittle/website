import React from "react";

import Button from "./Button/Button";
import Graphic from "./Graphic/Graphic";
import "./Landing.css";
import ProfilePic from "./Profile.jpg";

interface ILandingState {
  showPanel: boolean;
}

export default class Landing extends React.Component<{}, ILandingState> {

  constructor(props: any) {
    super(props);

    this.state = {
      showPanel: false,
    };
  }

  public render(): JSX.Element {
    return (
      <div className="landing">

        <Graphic/>

        <div className={"info"}>
          <img src={ProfilePic} className="Profile-Pic" alt={"Profile Picture"}/>
          <h1>Thomas Northall-Little</h1>
          <p className="byline">Software Developer at Nearmap</p>

          <p> <a href="mailto:contact@tomnlittle.com"> contact@tomnlittle.com </a> </p>
          <p className="Links">
            <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">LinkedIn</a>
            <a href="https://github.com/tomnlittle">GitHub</a>
          </p>

          {/* <Button onClick={() => this.onPanelClick()}> Projects </Button> */}
          {/* <Button onClick={() => this.onPanelClick()}> Experience </Button> */}

        </div>

      </div >
    );
  }

  private onPanelClick() {
    const newState = !this.state.showPanel;
    // console.log({ newState });
    this.setState({
      showPanel: newState,
    });
  }
}
