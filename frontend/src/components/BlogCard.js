import React from 'react';
import { Button } from 'flowbite-react';

const BlogCard = () => {
  return (
    <div className="flex flex-col sm:flex-row  border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center p-3 gap-2">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Balanced life?</h2>
        <p className="text-gray-500 my-2">Checkout these health blog</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Balanced Life
          </a>
        </Button>
      </div>
      <div className="p-7">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6Fq-IBInPmhRrJr8Un8Hqma5u7owzABLuQ&s"
          className="rounded-tl-xl rounded-br-xl rounded-bl-xl"
        />
      </div>
    </div>
  );
};

export default BlogCard;
