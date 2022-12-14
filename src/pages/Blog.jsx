import React from "react";
import BlogTitle from "../components/BlogTitle";
import "../Assets/CSS/Blog.css";
import FeaturedImage from "../components/FeaturedImage";
import BlogContent from "../components/BlogContent";

const Blog = () => {
  return (
    <div>
      <BlogTitle />
      <FeaturedImage />
      <BlogContent />
    </div>
  );
};

export default Blog;
