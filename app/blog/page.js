import React from 'react'

import Image from 'next/image';

const Blog = () => {
  const blogs = [
    {
      title: 'First Blog',
      description: 'This is the first blog description.',
      slug: 'first-blog',
      date: '2023-10-01',
      authors: ['Author One'],
      image: '/images/first-blog.jpg',
    },
    {
      title: 'Second Blog',
      description: 'This is the second blog description.',
      slug: 'second-blog',
      date: '2023-10-02',
      authors: ['Author Two'],
      image: '/images/second-blog.jpg',
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500 mb-2">By: {blog.authors.join(', ')}</p>
              <p className="text-sm text-gray-500 mb-4">Date: {blog.date}</p>
              <a href={`/blog/${blog.slug}`} className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;