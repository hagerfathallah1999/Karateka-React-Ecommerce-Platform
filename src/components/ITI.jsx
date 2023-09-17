import { Component } from "react";

class ITI extends Component {
  constructor() {
    super();
    console.log("ITI => constructor");
  }

  state = { number: 0, x: 99 };

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  componentDidMount() {
    console.log("ITI => componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ITI => componentDidUpdate", { prevProps, prevState });
  }

  componentWillUnmount() {
    console.log("ITI => componentWillUnmount");
  }

  render() {
    console.log("ITI => render");

    return (
      <>
        <h1>ITI Component! - {this.props.track}</h1>
        <h2>Number: {this.state.number}</h2>
        <button onClick={this.handleClick} className="btn">
          +
        </button>
      </>
    );
  }
}

export default ITI;
