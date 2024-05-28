import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About BlogNest
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to BlogNest! Where you can create and read blogs on
              varoius topics.
            </p>

            <p>
              On this blog, you'll find weekly articles on topics such as food,
              travel, fashion, health, finance, sports, and more. One should be
              always learning and exploring new things, so be sure to check back
              often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
