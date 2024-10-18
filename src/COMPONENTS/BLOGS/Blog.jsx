import React from "react";
import "./blog.css";
import Backbtn from "../BACK-BUTTON/Backbtn";

const Blog = () => {
  return (
    <div className="blog__container">
      <h3 className="blog__title">Visit my blog and keep your feedback</h3>
      <h1 className="blog__header">My Blog</h1>
      <div className="blogs__div">
        <div className="blog__card">
          <img
            className="blog__card__image"
            src="https://rainbowit.net/html/inbio/assets/images/blog/blog-02.jpg"
            alt="images"
          />
          <h2>Development</h2>
          <p>The services provide for design</p>
          <button>Read More</button>
        </div>

        <div className="blog__card__two">
          <img
            className="blog__card__image"
            src="https://rainbowit.net/html/inbio/assets/images/blog/blog-03.jpg"
            alt="images"
          />
          <h2>Web Design</h2>
          <p>The services provide for design</p>
          <button>Read More</button>
        </div>

        <div className="blog__card__three">
          <img
            className="blog__card__image"
            src="https://rainbowit.net/html/inbio/assets/images/blog/blog-04.jpg"
            alt="images"
          />
          <h2>UI/UX Design</h2>
          <p>The services provide for design</p>
          <button>Read More</button>
        </div>

        <div className="blog_card__four">
          <img
            className="blog__card__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEQYy2lmbHTerp6zOBfdHwOrH376N-_RKtA&s"
            alt="images"
          />
          <h2>Marketing</h2>
          <p>The services provide for design</p>
          <button>Read More</button>
        </div>
      </div>

      <Backbtn />
    </div>
  );
};

export default Blog;
