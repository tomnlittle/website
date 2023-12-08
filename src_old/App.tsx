import React from "react";
import ReactDOM from "react-dom";

import About from "./About/About";
import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";

export default class App extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
        <div className="App">
          <Landing/>
          <Footer/>
        </div>
    );
  }
}
