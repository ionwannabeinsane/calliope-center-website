import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaCalendar, FaHeart, FaComment, FaEllipsisH, FaEdit, FaTrash } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost = ({ post, onLike, onComment, onEdit, onDelete, showLikeCount = true }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
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

  const handleEdit = () => {
    setShowMenu(false);
    onEdit && onEdit(post);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      setShowMenu(false);
      onDelete && onDelete(post.id);
    }
  };

  const isOwnPost = () => {
    // Check if this post was created by the current user
    // For now, we'll use a simple localStorage check
    const userPosts = JSON.parse(localStorage.getItem('calliope_user_posts') || '[]');
    return userPosts.includes(post.id);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

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
        
        {/* Edit/Delete Menu for Own Posts */}
        {isOwnPost() && (
          <div className="post-menu" ref={menuRef}>
            <button 
              className="menu-toggle"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaEllipsisH />
            </button>
            
            {showMenu && (
              <div className="menu-dropdown">
                <button className="menu-item" onClick={handleEdit}>
                  <FaEdit />
                  <span>Edit Post</span>
                </button>
                <button className="menu-item delete" onClick={handleDelete}>
                  <FaTrash />
                  <span>Delete Post</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost; 