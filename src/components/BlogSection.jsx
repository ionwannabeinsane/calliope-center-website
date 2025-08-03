import React from 'react';
import { FaFire, FaClock } from 'react-icons/fa';
import BlogPost from './BlogPost';
import './BlogSection.css';

const BlogSection = ({ title, posts, icon, onLike, onComment, maxPosts = 3 }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  const displayPosts = posts.slice(0, maxPosts);

  return (
    <div className="blog-section">
      <div className="section-header">
        {icon && <span className="section-icon">{icon}</span>}
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="section-posts">
        {displayPosts.map(post => (
          <BlogPost
            key={post.id}
            post={post}
            onLike={onLike}
            onComment={onComment}
            showLikeCount={true}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection; 