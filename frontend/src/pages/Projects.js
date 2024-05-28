import React from 'react';
import BlogCard from '../components/BlogCard';
const Projects = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Blogs</h1>
      <p className="text-md text-gray-500">
        Post and read fun and engaging blogs while learning lots of things!
      </p>
      <BlogCard />
    </div>
  );
};

export default Projects;
