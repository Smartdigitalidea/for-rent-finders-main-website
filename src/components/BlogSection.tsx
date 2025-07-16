import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
const BlogSection = () => {
  const blogPosts = [{
    id: 1,
    title: "The Best Neighborhoods in Miami for Renters in 2025",
    excerpt: "Discover the top areas to rent in Miami this year, from affordable gems to luxury hotspots, complete with insider tips on what to expect...",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=600&q=80",
    category: "Neighborhoods",
    readTime: "5 min read",
    publishDate: "Jan 15, 2025",
    trending: true
  }, {
    id: 2,
    title: "How to Budget for Your First Apartment",
    excerpt: "Complete guide to apartment budgeting including hidden costs, security deposits, utilities, and smart money-saving tips for new renters...",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    category: "Finance",
    readTime: "7 min read",
    publishDate: "Jan 12, 2025",
    trending: false
  }, {
    id: 3,
    title: "Studio vs 1-Bedroom: What's Best for You?",
    excerpt: "Weighing the pros and cons of studio apartments versus one-bedrooms in South Florida, including cost analysis and lifestyle considerations...",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80",
    category: "Apartment Types",
    readTime: "4 min read",
    publishDate: "Jan 10, 2025",
    trending: false
  }, {
    id: 4,
    title: "How Credit Score Affects Apartment Approval",
    excerpt: "Everything you need to know about credit requirements for renting, how to improve your score, and alternative options for those with poor credit...",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    category: "Credit",
    readTime: "6 min read",
    publishDate: "Jan 8, 2025",
    trending: true
  }];
  return <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Latest <span className="text-[#3384B3]">Blog Posts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Stay informed with expert insights, market updates, and helpful tips for renters 
              in South Florida. Updated every Monday & Friday.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Updated Automatically Every Monday & Friday</span>
            </div>
            <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map(post => <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category and trending badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-[#3384B3] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    {post.trending && <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Trending</span>
                      </span>}
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>For Rent Finders</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#3384B3] transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read more button */}
                  <button className="text-[#3384B3] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>)}
          </div>

          {/* View all posts CTA */}
          <div className="text-center">
            <Link to="/blog">
              <Button className="luxury-button border-0 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-2xl">
                <TrendingUp className="w-5 h-5 mr-2" />
                View All Articles
              </Button>
            </Link>
          </div>

          {/* Note about automated content */}
          
        </div>
      </div>
    </section>;
};
export default BlogSection;