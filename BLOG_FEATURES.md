# Calliope Center Blog Features

## Overview
The Calliope Center website now includes a fully functional blog system where community members can share their stories, experiences, and thoughts about rare diseases and the center's impact.

## Features

### 🖊️ Blog Post Creation
- **Title and Content**: Users can add a title and write their story in a rich text area
- **Optional Name Display**: Users can choose to include their name or remain anonymous
- **Image Upload**: Support for JPG, PNG, GIF, and WebP images (max 5MB)
- **Drag & Drop**: Easy image upload with drag-and-drop functionality

### 🛡️ Content Moderation
- **Inappropriate Language Filter**: Automatically detects and blocks posts containing inappropriate words
- **Content Validation**: Ensures posts meet minimum requirements (title, content length)
- **File Type Validation**: Only allows image files to be uploaded
- **File Size Limits**: Prevents oversized images from being uploaded

### 📱 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Search Functionality**: Users can search through existing posts
- **Like and Comment**: Interactive features for community engagement
- **Real-time Character Count**: Shows character count while writing
- **Form Validation**: Clear error messages and validation feedback

### 💾 Data Storage
- **Local Storage**: Posts are stored locally in the browser
- **Persistent Data**: Posts remain available between browser sessions
- **Search Capability**: Full-text search across titles, content, and author names

## How to Use

### Creating a Post
1. Navigate to the Blog page
2. Click "Share Your Story" button
3. Choose whether to include your name
4. Fill in the title and content
5. Optionally upload an image
6. Click "Post Story"

### Searching Posts
1. Use the search bar at the top of the blog page
2. Type keywords to find relevant posts
3. Clear the search to see all posts again

### Interacting with Posts
- Click the "Like" button to show appreciation
- Click the "Comment" button to add a comment
- Posts are displayed with newest first

## Technical Details

### Content Moderation Words
The system filters out posts containing inappropriate language including:
- Hate speech
- Violence-related terms
- Discriminatory language
- Profanity
- Other offensive content

### File Upload Limits
- **Supported Formats**: JPG, JPEG, PNG, GIF, WebP
- **Maximum Size**: 5MB per image
- **Storage**: Images are converted to base64 and stored locally

### Browser Compatibility
- Modern browsers with localStorage support
- Responsive design for all screen sizes
- Progressive enhancement for older browsers

## Future Enhancements
- Backend integration for persistent storage
- User authentication system
- Advanced content moderation
- Image optimization and compression
- Social media sharing
- Email notifications
- Admin panel for content management

## Support
For technical issues or feature requests, please contact the development team. 