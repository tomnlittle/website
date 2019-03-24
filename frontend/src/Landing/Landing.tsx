import React from "react";

import { REACT_APP_API_ADDRESS, REACT_APP_API_PROTOCOL } from "../config";
import request from "../utils/request";

import Button from "./Button/Button";
import "./Landing.css";
import Panel from "./Panel/Panel";
import ProfilePic from "./Profile.jpg";
import SideImage from "./SideImage.jpg";

interface ILandingState {
  showPanel: boolean;
}

export default class Landing extends React.Component<{}, ILandingState> {

  constructor(props: any) {
    super(props);

    request({
      method: "GET",
      url: `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_ADDRESS}/api/list`,
    }).then((data) => data.json())
      .then((result) => {
      console.log({ result });
    }).catch((error) => {
      console.log({ error });
    });

    this.state = {
      showPanel: false,
    };
  }

  public render(): JSX.Element {
    return (
      <div className={"Landing"}>

        {/* Left side */}

        <div className={"Left"}>
          <img src={ProfilePic} className="Profile-Pic" alt={"Profile Picture"}/>
          <h1>Thomas Northall-Little</h1>

          <p> <a href="mailto:contact@tomnlittle.com"> contact@tomnlittle.com </a> </p>
          <p className="Links">
            <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">LinkedIn</a>
            <a href="https://github.com/tomnlittle">GitHub</a>
          </p>

          <Button onClick={() => this.onPanelClick()}> Timeline </Button>
          <Button onClick={() => this.onPanelClick()}> Projects </Button>
          <Button onClick={() => this.onPanelClick()}> Experience </Button>
        </div>

        {/* Right Side */}

        <div className={"Right"}>
          <img src={SideImage} className="Side-Image" alt={""}/>
          { this.state.showPanel &&
            <Panel></Panel>
          }
        </div>

      </div >
    );
  }

  private onPanelClick() {
    const newState = !this.state.showPanel;
    console.log({ newState });
    this.setState({
      showPanel: newState,
    });
  }
}
