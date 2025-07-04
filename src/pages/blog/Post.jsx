import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { posts } from '../../blog';
import SEO from '../../components/SEO';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const { component: PostContent, title, description, image, date } = post;

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={description}
        url={`https://safari.flit.tz/blog/${slug}`}
        image={image}
        type="article"
      />
      <article className="prose lg:prose-lg mx-auto p-8">
        <h1>{title}</h1>
        {date && <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>}
        <PostContent />
      </article>
    </div>
  );
};

export default BlogPostPage;
