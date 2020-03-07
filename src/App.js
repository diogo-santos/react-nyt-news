import React, { Component } from 'react';
import './App.css';

import PostList from "./components/PostList";

const API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json';
const API_KEY = process.env.REACT_APP_NYT_API_KEY;

class App extends Component {
  state = {
    news: [],
    newsCount: 0
  }
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  componentDidMount() {
    fetch(`${API_URL}?api-key=${API_KEY}`)
      .then(this.handleErrors)
      .then(response => response.json())
      .then((data) => {
        this.setState({ news: data.results })
        this.setState({
          news: data.results,
          newsCount: data.num_results
        })
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <h1>NYT News - Top Stories ({this.state.newsCount})</h1>
        <PostList posts={this.state.news} />
      </div>
    );
  }
}

export default App;
