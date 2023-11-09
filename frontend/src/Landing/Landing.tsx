import React from "react";

import Graphic from "./Graphic/Graphic";
import "./Landing.css";
import ProfilePic from "./profile.jpg";

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
      <div className="landing" id="home">

        <Graphic/>

        {/* <div className="Navbar">
          <ul>
            <li><a href="#about">About</a></li>
          </ul>
        </div> */}

        <div className={"info"}>
          <img src={ProfilePic} className="Profile-Pic" alt={"Profile Picture"}/>
          <h1>Thomas Northall-Little</h1>
          <p className="byline">Senior Software Engineer at Canva</p>

          <p> <a href="mailto:contact@tomnlittle.com">contact@tomnlittle.com</a></p>
          <p className="Links">
            <a href="https://www.linkedin.com/in/thomas-northall-little-073604111">LinkedIn</a>
            <a href="https://github.com/tomnlittle">GitHub</a>
          </p>

          {/* <Button onClick={() => this.props.handleClick()}> About </Button> */}
          {/* <Button onClick={() => this.props.handleClick()}> Experience </Button> */}

        </div>
      </div>
    );
  }
}
