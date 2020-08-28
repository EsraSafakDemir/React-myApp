import React, { Component } from "react";

class Bird extends Component {
  constructor(props) {
    super(props);

    this.state = { isShowingText: "esra" };
  }

  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aqua",
          flexDirection: "column",
        }}
      >
        <h1>{this.state.isShowingText}</h1>
        <p
          style={{
            color: "red",
            fontSize: 20,
          }}
        >
          {this.props.birdName}{" "}
        </p>
        <p>{this.props.birdKind}</p>
        <p>{this.props.birdAge}</p>
        <p>{this.props.birdColor}</p>

        <button
          onClick={() => {
            this.setState({ isShowingText: "Ezgi" });
          }}
        >
          Enter
        </button>
      </div>
    );
  }
}
export default Bird;
