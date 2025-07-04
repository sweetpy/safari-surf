import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { posts } from '../blog';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Safari Surf WiFi Blog"
        description="Connectivity tips and travel guides from Safari Surf WiFi"
        url="https://safari.flit.tz/blog"
        type="article"
      />
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Safari Surf Blog</h1>
        <p className="text-xl">Stay connected with our latest articles</p>
      </section>
      <section className="py-16 max-w-3xl mx-auto px-4">
        {posts.map(post => (
          <article key={post.slug} className="mb-12">
            <h2 className="text-2xl font-bold mb-2">
              <Link to={`/blog/${post.slug}`} className="text-orange-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            {post.date && <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>}
            <p className="text-gray-700 mt-2">{post.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;
