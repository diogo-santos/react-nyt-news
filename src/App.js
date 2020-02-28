import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    news: [],
    newsCount: 0
  }
  componentDidMount() {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=usMFEIhDlH6rz0pdz0YATYU7LShy3XJB')
      .then(response => response.json())
      .then((data) => {
        this.setState({ news: data.results })
        this.setState({
          news: data.results,
          newsCount: data.num_results
        })
      })
  }
  render() {
    return (
      <div className="container">
        <h1>NYT News - Top Stories ({this.state.newsCount})</h1>
        <div className="row">
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
