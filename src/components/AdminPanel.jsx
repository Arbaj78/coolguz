import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

const AdminPanel = ({ blogPosts, saveBlogPosts, categories }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    author: '',
    category: '',
    content: '',
    image: '',
    readTime: ''
  });

  // Add new blog post
  const handleAddPost = async () => {
    if (!newPost.title || !newPost.excerpt || !newPost.author || !newPost.category) {
      alert('Please fill all required fields');
      return;
    }

    const post = {
      id: Date.now(),
      ...newPost,
      date: new Date().toISOString().split('T')[0],
      featured: false
    };

    const updatedPosts = [...blogPosts, post];
    saveBlogPosts(updatedPosts);
    
    // Reset form
    setNewPost({
      title: '',
      excerpt: '',
      author: '',
      category: '',
      content: '',
      image: '',
      readTime: ''
    });
    setShowAddForm(false);
  };

  // Edit blog post
  const handleEditPost = (post) => {
    setEditingPost(post.id);
    setNewPost(post);
  };

  // Save edited post
  const handleSaveEdit = async () => {
    const updatedPosts = blogPosts.map(post => 
      post.id === editingPost ? { ...newPost, id: editingPost } : post
    );
    saveBlogPosts(updatedPosts);
    setEditingPost(null);
    setNewPost({
      title: '',
      excerpt: '',
      author: '',
      category: '',
      content: '',
      image: '',
      readTime: ''
    });
  };

  // Delete blog post
  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = blogPosts.filter(post => post.id !== id);
      saveBlogPosts(updatedPosts);
    }
  };

  // Toggle featured status
  const toggleFeatured = (id) => {
    const updatedPosts = blogPosts.map(post => 
      post.id === id ? { ...post, featured: !post.featured } : post
    );
    saveBlogPosts(updatedPosts);
  };

  return (
    <div className="admin-panel p-8 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-3xl font-bold text-black mb-6">Admin Panel</h3>

      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-8 flex items-center"
      >
        <Plus className="mr-2" size={20} />
        {showAddForm ? 'Cancel Add Post' : 'Add New Post'}
      </button>

      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-inner mb-8">
          <h4 className="text-2xl font-semibold text-black mb-4">{editingPost ? 'Edit Post' : 'Create New Post'}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Excerpt"
              value={newPost.excerpt}
              onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Author"
              value={newPost.author}
              onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={newPost.category}
              onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              {categories.filter(cat => cat !== 'All').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Image URL"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Read Time (e.g., 5 min read)"
              value={newPost.readTime}
              onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Full Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          ></textarea>
          <button
            onClick={editingPost ? handleSaveEdit : handleAddPost}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center"
          >
            <Save className="mr-2" size={20} />
            {editingPost ? 'Save Changes' : 'Add Post'}
          </button>
          {editingPost && (
            <button
              onClick={() => {
                setEditingPost(null);
                setNewPost({
                  title: '',
                  excerpt: '',
                  author: '',
                  category: '',
                  content: '',
                  image: '',
                  readTime: ''
                });
              }}
              className="ml-4 bg-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center"
            >
              <X className="mr-2" size={20} />
              Cancel Edit
            </button>
          )}
        </div>
      )}

      <h4 className="text-2xl font-semibold text-black mb-4">Manage Existing Posts</h4>
      <div className="grid grid-cols-1 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex-1 mb-4 md:mb-0">
              <h5 className="text-xl font-bold text-black mb-2">{post.title}</h5>
              <p className="text-gray-600 text-sm">By {post.author} on {post.date} ({post.readTime})</p>
              <p className="text-gray-700 text-sm mt-1">Category: {post.category}</p>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-orange-600"
                  checked={post.featured}
                  onChange={() => toggleFeatured(post.id)}
                />
                <span className="ml-2 text-gray-700">Featured Post</span>
              </label>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleEditPost(post)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors flex items-center"
              >
                <Edit size={18} className="mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center"
              >
                <Trash2 size={18} className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;