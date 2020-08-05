import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     doggos: [],
  //     doggoText: ""
  //   };
  // }

  // constructor shortcut
  state = {
    doggos: [],
    doggoText: ""
  };

  componentDidMount() {
    // fetch initial doggo data
    axios
      .get("https://api.github.com/users/andre-jeon")
      .then(res => {
        this.setState({
          doggos: res.data.message
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    // has doggos state changed?
    // is yes, did user search for 'chihuahua'?
    // if yes, reset search to "husky"
    if (prevState.doggos !== this.state.doggos) {
      if (this.state.doggoText === "chihuahua") {
        axios
          .get(`https://dog.ceo/api/breed/husky/images`)
          .then(res => {
            this.setState({
              doggos: res.data.message,
              doggoText: "husky"
            });
          })
          .catch(err => console.log(err));
      }
    }
  }

  handleChanges = e => {
    const { value } = e.target;

    this.setState({
      doggoText: value
    });
  };

  fetchDoggos = e => {
    e.preventDefault();

    axios
      .get(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
      .then(res => {
        this.setState({
          doggos: res.data.message
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchDoggos}>Fetch doggos</button>
        <div className="doggos">
          {this.state.doggos.map(doggo => (
            <img width="200" src={doggo} key={doggo} alt={doggo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
