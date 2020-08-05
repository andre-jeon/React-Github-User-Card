import React from 'react';
import logo from './logo.svg';
import './App.css';

import Usercard from './Component/Usercard'
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/andre-jeon')
    .then(res => {
        this.setState({
          user: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <Usercard user={this.state.user} />
      </div>
    );
  }

}

export default App;
