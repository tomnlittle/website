import React from "react";
import ReactDOM from "react-dom";

import About from "./About/About";
import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";

export default class App extends React.Component<{}, {}> {

  public aboutRef: React.RefObject<any> = React.createRef();

  constructor(props: any) {
    super(props);
    this.onPanelClick = this.onPanelClick.bind(this);
  }

  public render(): JSX.Element {
    return (
        <div className="App">
          <Landing handleClick={this.onPanelClick}/>
          <About ref={this.aboutRef}/>
          <Footer/>
        </div>
    );
  }

  private onPanelClick() {
    console.log(this.aboutRef.current.offsetTop);
    window.scrollTo(0, this.aboutRef.current.offsetTop);
  }
}
