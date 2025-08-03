import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaUpload, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import './BlogPostForm.css';

const BlogPostForm = ({ onSubmit, onCancel, editPost = null }) => {
  const [formData, setFormData] = useState({
    name: editPost?.name || '',
    title: editPost?.title || '',
    content: editPost?.content || '',
    image: null,
    showName: editPost?.showName || false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inappropriate words filter (you can expand this list)
  const inappropriateWords = [
    'hate', 'kill', 'death', 'suicide', 'murder', 'violence', 'abuse',
    'racist', 'sexist', 'homophobic', 'discriminatory', 'offensive',
    'curse', 'swear', 'profanity', 'inappropriate', 'explicit'
  ];

  const checkContent = (text) => {
    const lowerText = text.toLowerCase();
    const foundWords = inappropriateWords.filter(word => 
      lowerText.includes(word.toLowerCase())
    );
    return foundWords;
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: 'Image must be smaller than 5MB' }));
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, image: 'Please upload an image file' }));
        return;
      }

      setFormData(prev => ({ ...prev, image: file }));
      setErrors(prev => ({ ...prev, image: '' }));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    } else if (formData.content.length < 10) {
      newErrors.content = 'Content must be at least 10 characters long';
    }

    // Check for inappropriate content
    const inappropriateContent = checkContent(formData.content);
    if (inappropriateContent.length > 0) {
      newErrors.content = `Content contains inappropriate language: ${inappropriateContent.join(', ')}`;
    }

    if (formData.showName && !formData.name.trim()) {
      newErrors.name = 'Name is required when "Include Name" is checked';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Convert image to base64 for storage
      let imageData = null;
      if (formData.image) {
        imageData = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(formData.image);
        });
      }

      const postData = {
        id: editPost ? editPost.id : Date.now().toString(),
        title: formData.title.trim(),
        content: formData.content.trim(),
        name: formData.showName ? formData.name.trim() : 'Anonymous',
        image: imageData || editPost?.image,
        timestamp: editPost ? editPost.timestamp : new Date().toISOString(),
        showName: formData.showName
      };

      onSubmit(postData);
      
      // Reset form only if not editing
      if (!editPost) {
        setFormData({
          name: '',
          title: '',
          content: '',
          image: null,
          showName: false
        });
      }
    } catch (error) {
      console.error('Error creating post:', error);
      setErrors({ submit: 'Failed to create post. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setErrors(prev => ({ ...prev, image: '' }));
  };

  return (
    <div className="blog-post-form">
      <h2>{editPost ? 'Edit Your Story' : 'Share Your Story'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="showName"
              checked={formData.showName}
              onChange={handleInputChange}
            />
            Include my name in this post
          </label>
        </div>

        {formData.showName && (
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter post title"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="content">Your Story *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Share your story, experience, or thoughts..."
            rows="8"
            className={errors.content ? 'error' : ''}
          />
          {errors.content && <span className="error-message">{errors.content}</span>}
          <div className="char-count">
            {formData.content.length} characters
          </div>
        </div>

        <div className="form-group">
          <label>Add an Image (Optional)</label>
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''} ${errors.image ? 'error' : ''}`}
          >
            <input {...getInputProps()} />
            {formData.image ? (
              <div className="image-preview">
                <img src={URL.createObjectURL(formData.image)} alt="Preview" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="remove-image"
                >
                  <FaTimes />
                </button>
              </div>
            ) : (
              <div className="dropzone-content">
                <FaUpload className="upload-icon" />
                <p>{isDragActive ? 'Drop the image here' : 'Drag & drop an image, or click to select'}</p>
                <p className="file-info">Supports: JPG, PNG, GIF, WebP (max 5MB)</p>
              </div>
            )}
          </div>
          {errors.image && <span className="error-message">{errors.image}</span>}
        </div>

        {errors.submit && (
          <div className="error-message submit-error">{errors.submit}</div>
        )}

        <div className="form-actions">
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (editPost ? 'Updating...' : 'Posting...') : (editPost ? 'Update Story' : 'Post Story')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm; 