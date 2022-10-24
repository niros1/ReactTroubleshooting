// import { Component } from "react";
import * as React from "react";
import { render } from "react-dom";
import { NotWrokingSubmitButton } from "./ex1";
import { CountSecrets } from "./ex2";
import { Library } from "./ex3";
import { BVForm } from "./ex4";
// import Hello from "./Hello";
import "./style.css";

import { Code } from "../src/code";

let code = new Code("Test Message!!");

interface AppProps {}
interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <NotWrokingSubmitButton />
        <hr />
        <CountSecrets />
        <hr />
        <BVForm />
        <hr />
        <Library
          books={[
            {
              id: "0078e171-20e7-42a1-a6fc-cd33b4dfa664",
              name: "Name of the rose",
              author: { name: "Umberto Eco", address: "Italy" }
            },
            {
              id: "0078e171-20e7-42a1-a6fc-cd33b4dfa665",
              name: "The Client",
              author: { name: "John Grisham", address: "USA" }
            }
          ]}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
