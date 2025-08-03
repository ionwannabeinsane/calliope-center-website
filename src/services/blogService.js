const BLOG_POSTS_KEY = 'calliope_blog_posts';

export const blogService = {
  // Get all blog posts
  getAllPosts: () => {
    try {
      const posts = localStorage.getItem(BLOG_POSTS_KEY);
      return posts ? JSON.parse(posts) : [];
    } catch (error) {
      console.error('Error loading blog posts:', error);
      return [];
    }
  },

  // Add a new blog post
  addPost: (post) => {
    try {
      const posts = blogService.getAllPosts();
      const newPost = {
        ...post,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: []
      };
      
      // Add to beginning of array (newest first)
      posts.unshift(newPost);
      
      localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
      return newPost;
    } catch (error) {
      console.error('Error adding blog post:', error);
      throw new Error('Failed to save blog post');
    }
  },

  // Update a blog post
  updatePost: (postId, updates) => {
    try {
      const posts = blogService.getAllPosts();
      const index = posts.findIndex(post => post.id === postId);
      
      if (index !== -1) {
        posts[index] = { ...posts[index], ...updates };
        localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
        return posts[index];
      }
      
      throw new Error('Post not found');
    } catch (error) {
      console.error('Error updating blog post:', error);
      throw error;
    }
  },

  // Delete a blog post
  deletePost: (postId) => {
    try {
      const posts = blogService.getAllPosts();
      const filteredPosts = posts.filter(post => post.id !== postId);
      localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(filteredPosts));
      return true;
    } catch (error) {
      console.error('Error deleting blog post:', error);
      throw error;
    }
  },

  // Like a blog post
  likePost: (postId) => {
    try {
      const posts = blogService.getAllPosts();
      const index = posts.findIndex(post => post.id === postId);
      
      if (index !== -1) {
        // Get liked posts from localStorage
        const likedPosts = JSON.parse(localStorage.getItem('calliope_liked_posts') || '[]');
        const isLiked = likedPosts.includes(postId);
        
        if (isLiked) {
          // Unlike
          posts[index].likes = Math.max(0, (posts[index].likes || 0) - 1);
          const newLikedPosts = likedPosts.filter(id => id !== postId);
          localStorage.setItem('calliope_liked_posts', JSON.stringify(newLikedPosts));
        } else {
          // Like
          posts[index].likes = (posts[index].likes || 0) + 1;
          likedPosts.push(postId);
          localStorage.setItem('calliope_liked_posts', JSON.stringify(likedPosts));
        }
        
        localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
        return posts[index];
      }
      
      throw new Error('Post not found');
    } catch (error) {
      console.error('Error liking blog post:', error);
      throw error;
    }
  },

  // Check if a post is liked by current user
  isPostLiked: (postId) => {
    try {
      const likedPosts = JSON.parse(localStorage.getItem('calliope_liked_posts') || '[]');
      return likedPosts.includes(postId);
    } catch (error) {
      console.error('Error checking if post is liked:', error);
      return false;
    }
  },

  // Add a comment to a blog post
  addComment: (postId, comment) => {
    try {
      const posts = blogService.getAllPosts();
      const index = posts.findIndex(post => post.id === postId);
      
      if (index !== -1) {
        const newComment = {
          id: Date.now().toString(),
          text: comment,
          timestamp: new Date().toISOString(),
          author: 'Anonymous'
        };
        
        posts[index].comments = posts[index].comments || [];
        posts[index].comments.push(newComment);
        
        localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
        return newComment;
      }
      
      throw new Error('Post not found');
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },

  // Get posts by search term
  searchPosts: (searchTerm) => {
    try {
      const posts = blogService.getAllPosts();
      const term = searchTerm.toLowerCase();
      
      return posts.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term) ||
        post.name.toLowerCase().includes(term)
      );
    } catch (error) {
      console.error('Error searching posts:', error);
      return [];
    }
  },

  // Clear all posts (for testing/reset)
  clearAllPosts: () => {
    try {
      localStorage.removeItem(BLOG_POSTS_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing posts:', error);
      throw error;
    }
  }
}; 