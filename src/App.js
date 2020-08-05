import React from 'react';
import logo from './logo.svg';
import './App.css';

import Usercard from './Component/Usercard'
import Followers from './Component/Followers'
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


  fetchFollowers = e => {
    e.preventDefault();

    axios
      .get('https://api.github.com/users/andre-jeon/followers')
      .then(res => {
        this.setState({
          followers: res.data.followers
        });
      })
      .catch(err => console.log(err));
  };

render() {
  return (
    <div className="App">
      <Usercard user={this.state.user} />
      <Followers followers={this.state.followers}/>
    </div>
  );
}

}

export default App;
