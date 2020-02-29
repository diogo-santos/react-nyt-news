import React, { Component } from 'react';
import './App.css';

const API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json';
const API_KEY = 'usMFEIhDlH6rz0pdz0YATYU7LShy3XJB';

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
        <div className="row card-columns">
          {this.state.news.map((post) => (
            <div className="card" style={{ width: 18 + 'rem' }}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <img className="card-img-top" src={post.multimedia[0].url} alt={post.caption} />
              </a>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.abstract}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
