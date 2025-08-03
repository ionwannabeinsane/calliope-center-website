import React from 'react';
import { FaUser, FaCalendar, FaHeart, FaComment } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost = ({ post, onLike, onComment, showLikeCount = true }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <article className="blog-post">
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-meta">
          <div className="post-author">
            <FaUser className="meta-icon" />
            <span>{post.name}</span>
          </div>
          <div className="post-date">
            <FaCalendar className="meta-icon" />
            <span>{formatDate(post.timestamp)}</span>
          </div>
          {showLikeCount && (
            <div className="post-likes">
              <FaHeart className="meta-icon" style={{ color: '#e74c3c' }} />
              <span>{post.likes || 0} likes</span>
            </div>
          )}
        </div>
      </div>

      {post.image && (
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}

      <div className="post-content">
        {post.showName && (
          <div className="author-section">
            <div className="author-name">
              <strong>{post.name}</strong>
            </div>
            <div className="author-divider"></div>
          </div>
        )}
        
        <div className="post-text">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="post-footer">
        <div className="post-actions">
          <button 
            className={`action-btn like-btn ${post.liked ? 'liked' : ''}`}
            onClick={() => onLike && onLike(post.id)}
          >
            <FaHeart className="action-icon" />
            <span>{post.likes || 0} {post.likes === 1 ? 'Like' : 'Likes'}</span>
          </button>
          <button 
            className="action-btn comment-btn"
            onClick={() => onComment && onComment(post.id)}
          >
            <FaComment className="action-icon" />
            <span>{post.comments ? post.comments.length : 0} Comments</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost; 