import React from "react";

import About from "./About";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Landing from "./Landing/Landing";

export default class App extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
        <div className="App">
          <Landing/>
          <About/>
          <Footer/>
        </div>
    );
  }
}
