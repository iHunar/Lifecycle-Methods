import React from "react";
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColor: "yellow",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ bgColor: this.props.bgColor });
    }, 2000);
  }

  static getDerivedStateFromProps(props, state) {
    return { bgColor: props.bgColor };
  }

  ChangeColor = () => {
    this.setState({ bgColor: "red" });
  };
  render() {
    console.log(this.props.bgColor);
    return (
      <div>
        <h1 style={{ backgroundColor: this.state.bgColor }}>
          Header Component
        </h1>
        <button onClick={this.ChangeColor}>Change color</button>
      </div>
    );
  }
}
export default Header;
