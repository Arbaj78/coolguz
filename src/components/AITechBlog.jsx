import React, { useState } from 'react';
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  User, 
  Tag, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Eye,
  Clock
} from 'lucide-react';

const AITechBlog = () => {
  const [currentPage, setCurrentPage] = useState('hero');
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Automation in Enterprise",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and driving unprecedented efficiency gains across industries.",
      author: "Dr. Sarah Chen",
      date: "2024-07-10",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      content: `
        <p>Artificial intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate. In this comprehensive analysis, we explore the current state of AI-powered automation and its profound impact on enterprise operations.</p>
        
        <h3>The Current Landscape</h3>
        <p>Today's AI automation tools are more sophisticated than ever before. Machine learning algorithms can now process vast amounts of data, identify patterns, and make decisions with minimal human intervention. This capability is particularly valuable in areas such as:</p>
        
        <ul>
          <li>Customer service through intelligent chatbots</li>
          <li>Supply chain optimization</li>
          <li>Predictive maintenance</li>
          <li>Financial forecasting and risk assessment</li>
        </ul>
        
        <h3>Benefits and Challenges</h3>
        <p>While the benefits of AI automation are substantial—including increased efficiency, reduced costs, and improved accuracy—organizations must also navigate challenges such as integration complexity, employee training, and ethical considerations.</p>
        
        <p>The future of work will undoubtedly be shaped by our ability to harness AI effectively while maintaining human oversight and creativity.</p>
      `,
      views: 1240,
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Machine Learning Models: From Theory to Production",
      excerpt: "A comprehensive guide to deploying machine learning models in production environments with real-world examples and best practices.",
      author: "Alex Rodriguez",
      date: "2024-07-08",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      content: `
        <p>Moving machine learning models from development to production is one of the most critical challenges in modern AI development. This article provides a roadmap for successful ML model deployment.</p>
        
        <h3>Development to Production Pipeline</h3>
        <p>The journey from a trained model to a production-ready system involves several key stages:</p>
        
        <ol>
          <li>Model validation and testing</li>
          <li>Infrastructure setup and scaling</li>
          <li>Monitoring and maintenance</li>
          <li>Continuous integration and deployment</li>
        </ol>
        
        <h3>Best Practices</h3>
        <p>Successful ML deployment requires careful attention to model versioning, data pipeline management, and performance monitoring. Organizations must also consider factors such as model interpretability, fairness, and regulatory compliance.</p>
        
        <p>By following established best practices and leveraging modern MLOps tools, teams can significantly reduce the time and risk associated with ML model deployment.</p>
      `,
      views: 890,
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Designing User-Centric AI Interfaces",
      excerpt: "How to create intuitive and accessible AI-powered interfaces that enhance user experience while maintaining transparency and control.",
      author: "Emily Johnson",
      date: "2024-07-05",
      category: "Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      content: `
        <p>As AI becomes more prevalent in user interfaces, designers face the challenge of creating experiences that are both powerful and approachable. This article explores key principles for designing AI-powered interfaces.</p>
        
        <h3>Core Design Principles</h3>
        <p>Effective AI interface design requires balancing sophistication with simplicity. Key principles include:</p>
        
        <ul>
          <li>Transparency in AI decision-making</li>
          <li>User control and override capabilities</li>
          <li>Progressive disclosure of AI features</li>
          <li>Clear feedback and error handling</li>
        </ul>
        
        <h3>Implementation Strategies</h3>
        <p>Successful AI interfaces often employ techniques such as contextual help, adaptive layouts, and intelligent defaults. The goal is to leverage AI capabilities while maintaining user agency and understanding.</p>
        
        <p>By focusing on user needs and maintaining design consistency, teams can create AI interfaces that truly enhance rather than complicate the user experience.</p>
      `,
      views: 1450,
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Ethical AI: Building Responsible Technology",
      excerpt: "Exploring the moral implications of AI development and establishing frameworks for ethical AI implementation in business contexts.",
      author: "Dr. Marcus Thompson",
      date: "2024-07-03",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      content: `
        <p>As AI systems become more powerful and pervasive, the importance of ethical considerations in AI development has never been greater. This article examines key ethical frameworks and practical implementation strategies.</p>
        
        <h3>Ethical Frameworks</h3>
        <p>Modern AI ethics encompasses several key areas:</p>
        
        <ul>
          <li>Algorithmic fairness and bias mitigation</li>
          <li>Privacy and data protection</li>
          <li>Transparency and explainability</li>
          <li>Accountability and governance</li>
        </ul>
        
        <h3>Practical Implementation</h3>
        <p>Organizations must develop comprehensive ethical AI policies that address both technical and social considerations. This includes establishing review processes, implementing bias testing, and ensuring ongoing monitoring of AI systems.</p>
        
        <p>The goal is to create AI systems that not only perform well technically but also align with human values and societal expectations.</p>
      `,
      views: 2100,
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "The Rise of Edge AI: Computing at the Source",
      excerpt: "Understanding how edge computing is revolutionizing AI deployment by bringing intelligence closer to data sources and users.",
      author: "David Park",
      date: "2024-06-28",
      category: "Edge Computing",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      content: `
        <p>Edge AI represents a paradigm shift in how we deploy and utilize artificial intelligence systems. By processing data closer to its source, edge AI offers significant advantages in terms of latency, privacy, and bandwidth efficiency.</p>
        
        <h3>Key Benefits of Edge AI</h3>
        <p>Edge AI deployment provides several compelling advantages:</p>
        
        <ul>
          <li>Reduced latency for real-time applications</li>
          <li>Enhanced privacy and data security</li>
          <li>Decreased bandwidth requirements</li>
          <li>Improved reliability and offline capabilities</li>
        </ul>
        
        <h3>Implementation Challenges</h3>
        <p>While edge AI offers numerous benefits, it also presents unique challenges including hardware constraints, model optimization, and device management at scale.</p>
        
        <p>Organizations must carefully balance the trade-offs between centralized and edge deployment strategies to maximize the benefits of their AI investments.</p>
      `,
      views: 1680,
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Natural Language Processing in Customer Experience",
      excerpt: "How advanced NLP technologies are transforming customer interactions and creating more personalized, efficient service experiences.",
      author: "Rachel Kim",
      date: "2024-06-25",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      content: `
        <p>Natural Language Processing has evolved from simple keyword matching to sophisticated understanding of context, intent, and emotion. This transformation is revolutionizing customer experience across industries.</p>
        
        <h3>Advanced NLP Applications</h3>
        <p>Modern NLP systems enable a wide range of customer experience improvements:</p>
        
        <ul>
          <li>Intelligent chatbots and virtual assistants</li>
          <li>Sentiment analysis and feedback processing</li>
          <li>Automated content personalization</li>
          <li>Multi-language support and translation</li>
        </ul>
        
        <h3>Implementation Best Practices</h3>
        <p>Successful NLP deployment requires careful attention to training data quality, model fine-tuning, and continuous improvement based on user feedback.</p>
        
        <p>By leveraging advanced NLP capabilities, organizations can create more natural, efficient, and satisfying customer interactions.</p>
      `,
      views: 1320,
      readTime: "7 min read"
    }
  ];

  const latestPosts = blogPosts.slice(0, 4);
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);
  
  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const paginatedPosts = filteredPosts.slice(
    (currentBlogPage - 1) * postsPerPage,
    currentBlogPage * postsPerPage
  );

  const getRelatedPosts = (currentPostId) => {
    return blogPosts.filter(post => post.id !== currentPostId).slice(0, 3);
  };

  // Hero Page Component
  const HeroPage = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Thoughts on{' '}
            <span className="text-orange-500">Technology</span>,
            <br />
            Design & Business
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of innovation, creativity, and growth. Join me
            on a journey through the latest trends and insights.
          </p>
          
          <button
            onClick={() => setCurrentPage('blog')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-bounce"></div>
    </div>
  );

  // Blog Page Component
  const BlogPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Technology <span className="text-orange-500">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in artificial intelligence, machine learning, and technology innovation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 mb-8">
              {paginatedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => {
                          setSelectedPost(post);
                          setCurrentPage('post');
                        }}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentBlogPage(Math.max(1, currentBlogPage - 1))}
                disabled={currentBlogPage === 1}
                className="p-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentBlogPage(i + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentBlogPage === i + 1
                      ? 'bg-orange-500 text-white'
                      : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentBlogPage(Math.min(totalPages, currentBlogPage + 1))}
                disabled={currentBlogPage === totalPages}
                className="p-2 rounded-lg bg-white border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Latest Updates */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Latest Updates
              </h3>
              <div className="space-y-4">
                {latestPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-orange-500 hover:text-orange-600 font-semibold text-sm">
                View All Updates
              </button>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Popular Posts
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Eye className="w-3 h-3" />
                        {post.views} views
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Individual Post Page Component
  const PostPage = () => {
    if (!selectedPost) return null;
    
    const relatedPosts = getRelatedPosts(selectedPost.id);
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back Button */}
          <button
            onClick={() => setCurrentPage('blog')}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Blog
          </button>

          {/* Article Header */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-gray-500">
                  <Eye className="w-4 h-4" />
                  {selectedPost.views} views
                </div>
                
                {/* Social Sharing */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 mr-2">Share:</span>
                  <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-orange-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </div>

          {/* Related Posts */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main App Component
  return (
    <div className="min-h-screen">
      {currentPage === 'hero' && <HeroPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'post' && <PostPage />}
    </div>
  );
};

export default AITechBlog;