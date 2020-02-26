import React, { Component } from 'react';

class App extends Component {
  state = {
    news: []
  }
  render() {
    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>NYT News - Top Stories</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Post title</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <span>Post abstract</span>
              </h6>
            </div>
          </div>
        </div>
       </div>
    );
  }
}

export default App;
