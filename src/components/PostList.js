import React from "react";


function PostList(props) {
  return (
    <div className="row card-columns">
    {props.posts.map((post) => (
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
  );
} 

export default PostList;