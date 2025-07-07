import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import AdminPanel from './AdminPanel';
import AdminLogin from './AdminLogin';

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Toggle for admin mode
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  // Categories that can be dynamically updated
  const [categories, setCategories] = useState([
    'All', 'AI Comparison', 'Healthcare AI', 'Generative AI', 'Quantum AI', 
    'AI Ethics', 'Edge AI', 'NLP', 'Computer Vision', 'FinTech AI', 
    'Deep Learning', 'AI Automation', 'EdTech AI'
  ]);

  // Sample initial data - replace with actual API calls
  const initialBlogPosts = [
    {
      id: 1,
      title: "ChatGPT vs Google Bard: The Ultimate AI Showdown",
      excerpt: "Comparing the latest AI chatbots and their capabilities in 2024. Which AI assistant reigns supreme for productivity, creativity, and problem-solving?",
      author: "Priya Sharma",
      date: "2024-07-05",
      category: "AI Comparison",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      featured: true,
      content: "Full article content here..."
    },
    {
      id: 2,
      title: "Machine Learning in Healthcare: Revolutionary Breakthroughs",
      excerpt: "Discover how AI is transforming medical diagnosis, drug discovery, and patient care. From cancer detection to personalized treatment plans.",
      author: "Dr. Rajesh Kumar",
      date: "2024-07-03",
      category: "Healthcare AI",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      featured: false,
      content: "Full article content here..."
    }
  ];

  // Load blog posts (simulate API call)
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        // Replace this with actual API call
        // const response = await fetch('/api/blog-posts');
        // const data = await response.json();
        
        // For demo, using localStorage to persist data
        const savedPosts = localStorage.getItem('blogPosts');
        if (savedPosts) {
          setBlogPosts(JSON.parse(savedPosts));
        } else {
          setBlogPosts(initialBlogPosts);
          localStorage.setItem('blogPosts', JSON.stringify(initialBlogPosts));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  // Save blog posts to localStorage (replace with API call)
  const saveBlogPosts = (posts) => {
    setBlogPosts(posts);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  };



  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (isAdmin) {
    if (!isLoggedIn) {
      return <AdminLogin onLogin={setIsLoggedIn} />;
    }
    return (
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AdminPanel 
            blogPosts={blogPosts} 
            saveBlogPosts={saveBlogPosts} 
            categories={categories}
          />
          <button
            onClick={() => {
              setIsAdmin(false);
              setIsLoggedIn(false);
            }}
            className="mt-8 bg-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
          >
            Exit Admin Panel
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Admin Toggle */}
        <div className="text-center mb-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-bold text-black">
              Latest <span className="text-orange-500">AI & Technology</span> Insights
            </h2>
            <button
              onClick={() => setIsAdmin(true)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors bg-gray-200 text-black hover:bg-gray-300`}
            >
              Admin Panel
            </button>
          </div>
          <p className="text-lg text-gray-600">Stay informed with our expert analysis and in-depth articles.</p>
        </div>

        {/* Search and Category Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="w-full sm:w-1/3">
            <select
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg shadow-lg overflow-hidden mb-12 flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img 
                src={featuredPost.image || "https://via.placeholder.com/600x400"}
                alt={featuredPost.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <span className="inline-block bg-white text-orange-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Featured Article
              </span>
              <h3 className="text-3xl font-bold mb-3 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-orange-100 mb-4 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-orange-200 text-sm mb-5">
                <User size={16} className="mr-2" /> {featuredPost.author}
                <Calendar size={16} className="ml-4 mr-2" /> {featuredPost.date}
                <span className="ml-4">{featuredPost.readTime}</span>
              </div>
              <a 
                href={`/blog/${featuredPost.id}`}
                className="inline-flex items-center text-white font-semibold hover:underline"
              >
                Read More <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        )}

        {/* Recent Posts */}
        <h3 className="text-3xl font-bold text-black mb-8">Recent Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.length > 0 ? (
            regularPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <img 
                  src={post.image || "https://via.placeholder.com/400x250"}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-bold text-black mb-2 leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <User size={14} className="mr-2" /> {post.author}
                    <Calendar size={14} className="ml-3 mr-2" /> {post.date}
                    <span className="ml-3">{post.readTime}</span>
                  </div>
                  <a 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-orange-500 font-semibold hover:underline"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">No blog posts found matching your criteria.</p>
          )}
        </div>
        <p className="text-lg text-gray-600 mt-4 px-4">Stay informed with our expert analysis and in-depth articles.</p>
      </div>




    </section>
  );
};

export default BlogSection;