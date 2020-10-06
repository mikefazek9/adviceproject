import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")

      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  // render app
  render() {
    const { advice } = this.state;

    return (
      <div className="hero">
        <div className="card">
          <p className="advice_text">"{advice}"</p>
        </div>
        <button className="button" onClick={this.fetchAdvice}>
          <span>Generate Advice...</span>
        </button>
      </div>
    );
  }
}

export default App;
