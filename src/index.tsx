// import { Component } from "react";
import * as React from "react";
import { render } from "react-dom";
import { NotWrokingSubmitButton } from "./ex1";
import { CountSecrets } from "./ex2";
import { Library } from "./ex3";
import { BVForm } from "./ex4";
// import Hello from "./Hello";
import "./style.css";

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
        <Library
          books={[
            {
              name: "Name of the rose",
              author: { name: "Umberto Eco", address: "Italy" }
            }
          ]}
        />
        <hr />
        <BVForm />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
