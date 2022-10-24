import * as React from "react";

export class NotWrokingSubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmitted: false
    };
  }

  handleSubmit() {
    this.setState({
      isFormSubmitted: true
    });
  }

  render() {
    return (
      <div>
        <h2>Fix a crash</h2>
        <p>This button should change the submit state but it doesn't work.</p>
        <p>Try to fix it so it will display the right state of the form.</p>
        <p>Submit state is: {(this.state as any).isFormSubmitted.toString()}</p>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
