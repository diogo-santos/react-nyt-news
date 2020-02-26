import React, { Component } from 'react';

class App extends Component {
  state = {
    news: [],
    newsCount: 0
  }
  componentDidMount() {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=usMFEIhDlH6rz0pdz0YATYU7LShy3XJB')
    .then(response => response.json())
    .then((data) => {
      this.setState({news: data.results})
      this.setState({
        news: data.results,
        newsCount: data.num_results
      })
    })
  }
  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
    <h1>NYT News - Top Stories ({this.state.newsCount})</h1>
          { this.state.news.map((post) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                <a href={post.url} target="_blank">{post.title}</a>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <span>{post.abstract}</span>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
