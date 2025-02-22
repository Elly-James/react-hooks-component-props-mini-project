import React from "react";
import About from "./About"
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header name= {blogData.name}/>
     <About 
     about= {blogData.about}
     image= {blogData.image}/>
     <ArticleList
     posts= {blogData.posts}
     />
    </div>
  );
}

export default App;
