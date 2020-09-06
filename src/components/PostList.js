import React from "react";


function PostList(props) {
  return (
    <div className="container">
      <div className="card-columns">
      {props.posts.map((post, i) => (
        <div className="card" key={i}>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            <img className="card-img-top" src={post.multimedia && post.multimedia.length >= 1? post.multimedia[0].url : ""} alt="" />
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

export default PostList;