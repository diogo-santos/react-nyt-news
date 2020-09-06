import React, { Component } from 'react';
import './App.css';

import PostList from "./components/PostList";
import Title from "./components/Title";

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const API_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

class App extends Component {
  state = {
    posts: [],
    postCount: 0
  }
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  componentDidMount() {
    fetch(API_URL)
      .then(this.handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          posts: data.results,
          postCount: data.num_results
        })
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <Title title={`NYT News - Top Stories (${this.state.postCount})`} />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
