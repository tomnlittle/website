import React from "react";

import { About, Landing, Footer } from "./Sections";
import "./App.css";

export default class App extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Landing />
        <About />
        <Footer />
      </div>
    );
  }
}
