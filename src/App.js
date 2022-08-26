import React from "react";
import Header from "./components/header";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "green" });
    }, 3000);
  }

  shouldComponentUpdate() {
    return false;
  }
  ChangeColor = () => {
    this.setState({ color: "yellow" });
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1 style={{ backgroundColor: this.state.color }}>Home Page</h1>
        <button onClick={this.ChangeColor}>Change color</button>
        <Header bgColor="blue" />
      </div>
    );
  }
}
export default App;
