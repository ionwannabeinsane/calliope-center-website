import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { FaPenFancy, FaSearch, FaPlus, FaTimes, FaFire, FaClock } from 'react-icons/fa';
import BlogPostForm from '../components/BlogPostForm';
import BlogPost from '../components/BlogPost';
import BlogSection from '../components/BlogSection';
import { blogService } from '../services/blogService';

const contentCardStyle = {
  background: 'rgba(255,255,255,0.18)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  border: '1px solid rgba(255,255,255,0.28)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  borderRadius: '24px',
  padding: '3rem 2rem',
  marginBottom: '2rem',
  maxWidth: '100%',
  textAlign: 'center'
};

const iconStyle = {
  fontSize: '4rem',
  color: '#6A0DAD',
  marginBottom: '2rem'
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showAllPosts, setShowAllPosts] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = blogService.searchPosts(searchTerm);
      setFilteredPosts(filtered);
      setShowAllPosts(false); // Hide sections when searching
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  const loadPosts = () => {
    const allPosts = blogService.getAllPosts();
    // Add liked status to each post
    const postsWithLikeStatus = allPosts.map(post => ({
      ...post,
      liked: blogService.isPostLiked(post.id)
    }));
    setPosts(postsWithLikeStatus);
    setFilteredPosts(postsWithLikeStatus);
  };

  const handleSubmitPost = (postData) => {
    try {
      blogService.addPost(postData);
      loadPosts();
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Failed to submit post. Please try again.');
    }
  };

  const handleLikePost = (postId) => {
    try {
      blogService.likePost(postId);
      loadPosts();
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  // Get recent posts (last 3)
  const getRecentPosts = () => {
    return posts.slice(0, 3);
  };

  // Get most liked posts
  const getMostLikedPosts = () => {
    return [...posts]
      .sort((a, b) => (b.likes || 0) - (a.likes || 0))
      .slice(0, 3);
  };

  const handleCommentPost = (postId) => {
    const comment = prompt('Enter your comment:');
    if (comment && comment.trim()) {
      try {
        blogService.addComment(postId, comment.trim());
        loadPosts();
      } catch (error) {
        console.error('Error adding comment:', error);
        alert('Failed to add comment. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="hero-section">
        <h1>Stories & Blog</h1>
        <p className="hero-subtext">Read and share stories from our community, learn about rare diseases, and stay updated on our latest programs and events.</p>
      </div>
      
      <div className="page-content" style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 2rem' }}>
        
        {/* Search and Post Button */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '8px',
            padding: '0.5rem',
            flex: 1,
            maxWidth: '400px'
          }}>
            <FaSearch style={{ color: '#6A0DAD', marginRight: '0.5rem' }} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                flex: 1,
                fontSize: '1rem'
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                <FaTimes />
              </button>
            )}
          </div>
          
          <button
            onClick={() => setShowForm(true)}
            style={{
              background: '#6A0DAD',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaPlus />
            Share Your Story
          </button>
        </div>

        {/* Blog Post Form */}
        {showForm && (
          <div style={{ marginBottom: '2rem' }}>
            <BlogPostForm
              onSubmit={handleSubmitPost}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {/* Blog Sections */}
        {posts.length > 0 && !searchTerm && !showAllPosts && (
          <>
            {/* Recent Posts Section */}
            <BlogSection
              title="Recent Posts"
              posts={getRecentPosts()}
              icon={<FaClock />}
              onLike={handleLikePost}
              onComment={handleCommentPost}
              maxPosts={3}
            />

            {/* Most Liked Posts Section */}
            <BlogSection
              title="Most Liked Posts"
              posts={getMostLikedPosts()}
              icon={<FaFire />}
              onLike={handleLikePost}
              onComment={handleCommentPost}
              maxPosts={3}
            />

            {/* View All Posts Button */}
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => setShowAllPosts(true)}
                style={{
                  background: '#6A0DAD',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                View All Posts ({posts.length})
              </button>
            </div>
          </>
        )}

        {/* All Posts (when searching or showing all) */}
        {(filteredPosts.length > 0 && (searchTerm || showAllPosts)) ? (
          <div>
            {searchTerm && (
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>
                  Search Results for "{searchTerm}"
                </h3>
              </div>
            )}
            {showAllPosts && !searchTerm && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '2rem' 
              }}>
                <h3 style={{ color: '#6A0DAD', margin: 0 }}>
                  All Posts ({posts.length})
                </h3>
                <button
                  onClick={() => setShowAllPosts(false)}
                  style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    border: '2px solid #e2e8f0',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Back to Sections
                </button>
              </div>
            )}
            {filteredPosts.map(post => (
              <BlogPost
                key={post.id}
                post={post}
                onLike={handleLikePost}
                onComment={handleCommentPost}
              />
            ))}
          </div>
        ) : (
          <div style={contentCardStyle}>
            <FaPenFancy style={iconStyle} />
            <h2 style={{ color: '#6A0DAD', marginBottom: '1rem' }}>
              {searchTerm ? 'No posts found' : 'No posts yet'}
            </h2>
            <p style={{ lineHeight: '1.6', marginBottom: '2rem', fontSize: '1.1rem' }}>
              {searchTerm 
                ? `No posts match your search for "${searchTerm}". Try a different search term.`
                : 'Be the first to share your story! Click "Share Your Story" to get started.'
              }
            </p>
            {!searchTerm && (
              <button
                onClick={() => setShowForm(true)}
                style={{
                  background: '#6A0DAD',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Share Your Story
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog; 