import React from "react";

class Home extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default Home;
