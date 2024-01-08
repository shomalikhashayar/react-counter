import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const card = {
    backgroundColor: "white",
    boxShadow: "0 0 8px 0 #00000020",
    padding: "20px",
    width: "300px",
    margin: "10px",
    minHeight: "250px", // Added minHeight for cards
  };

  const body = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setPosts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App" style={body}>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} style={card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
