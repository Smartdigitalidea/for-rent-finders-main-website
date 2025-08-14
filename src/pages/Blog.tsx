import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Search, Tag, BookOpen, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  // Sample blog posts as fallback
  const samplePosts: BlogPost[] = [{
    id: '1',
    title: "The Best Neighborhoods in Miami for Renters in 2025",
    excerpt: "Discover the hottest neighborhoods in Miami with our comprehensive guide to finding the perfect rental location.",
    content: "Full blog content here...",
    author: "Maria Rodriguez",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Neighborhoods",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    featured: true
  }, {
    id: '2',
    title: "How to Budget for Your First Apartment",
    excerpt: "Essential budgeting tips for first-time renters to ensure you find an affordable apartment without breaking the bank.",
    content: "Full blog content here...",
    author: "David Chen",
    date: "2025-01-12",
    readTime: "7 min read",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    featured: false
  }, {
    id: '3',
    title: "Studio vs 1-Bedroom: What's Best for You?",
    excerpt: "Compare the pros and cons of studio apartments versus one-bedroom units to make the right choice.",
    content: "Full blog content here...",
    author: "Sarah Johnson",
    date: "2025-01-10",
    readTime: "4 min read",
    category: "Apartment Types",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    featured: false
  }, {
    id: '4',
    title: "How Credit Score Affects Apartment Approval",
    excerpt: "Understanding the role of credit scores in apartment applications and how to improve your chances.",
    content: "Full blog content here...",
    author: "Michael Torres",
    date: "2025-01-08",
    readTime: "6 min read",
    category: "Credit & Approval",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    featured: true
  }, {
    id: '5',
    title: "Fort Lauderdale vs Miami: Where Should You Live?",
    excerpt: "A detailed comparison of living in Fort Lauderdale versus Miami, covering costs, lifestyle, and amenities.",
    content: "Full blog content here...",
    author: "Lisa Park",
    date: "2025-01-05",
    readTime: "8 min read",
    category: "City Comparison",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    featured: false
  }, {
    id: '6',
    title: "Luxury Amenities That Are Actually Worth It",
    excerpt: "Which luxury apartment amenities provide real value and which ones are just marketing fluff.",
    content: "Full blog content here...",
    author: "James Wilson",
    date: "2025-01-03",
    readTime: "5 min read",
    category: "Luxury Living",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    featured: false
  }];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { supabase } = await import('@/integrations/supabase/client');
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .order('published_at', { ascending: false });

        if (error) throw error;

        const formattedPosts: BlogPost[] = data.map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          author: post.author,
          date: post.published_at.split('T')[0],
          readTime: post.read_time,
          category: post.category,
          image: post.image_url,
          featured: post.featured
        }));

        setPosts(formattedPosts);

        // Set up real-time subscription
        const channel = supabase
          .channel('blog_posts_all')
          .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'blog_posts',
            filter: 'status=eq.published'
          }, () => {
            fetchPosts();
          })
          .subscribe();

        return () => {
          supabase.removeChannel(channel);
        };
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts(samplePosts); // Fallback to sample posts
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#F68036] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#232C5C] text-lg">Loading latest articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2000&h=800&fit=crop"
            alt="Luxury apartment background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#232C5C]/80 via-[#232C5C]/60 to-[#F68036]/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Rental Insights & 
              <span className="text-[#F68036] block"> Expert Advice</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest trends, tips, and insights for finding your perfect apartment in Miami and Fort Lauderdale.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search articles..." 
                  value={searchTerm} 
                  onChange={e => setSearchTerm(e.target.value)} 
                  className="pl-12 py-4 bg-white/95 backdrop-blur-sm border-0 text-lg rounded-xl shadow-lg" 
                />
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map(category => (
                  <Badge 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"} 
                    className={`cursor-pointer transition-all duration-300 text-sm px-4 py-2 rounded-full ${
                      selectedCategory === category 
                        ? 'bg-[#F68036] text-white border-0 hover:bg-[#F68036]/90' 
                        : 'bg-white/20 text-white border-white/30 hover:bg-white/30 hover:border-white/50'
                    }`} 
                    onClick={() => setSelectedCategory(category)}
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F68036]/10 text-[#F68036] px-6 py-3 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4 fill-current" />
                Featured Articles
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#232C5C] mb-4">
                Must-Read <span className="text-[#F68036]">Insights</span>
              </h2>
              <p className="text-lg text-[#232C5C]/70 max-w-2xl mx-auto">
                Our top picks for the most valuable rental advice and market insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <article className="bg-white rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-[#232C5C]/60 mb-4">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <Badge className="mb-4 bg-[#F68036]/10 text-[#F68036] border-0 px-3 py-1 rounded-full">
                        {post.category}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold mb-4 text-[#232C5C] group-hover:text-[#F68036] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-[#232C5C]/70 leading-relaxed text-lg">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-6 flex items-center text-[#F68036] font-semibold group-hover:translate-x-2 transition-transform">
                        Read More
                        <BookOpen className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#232C5C]/10 text-[#232C5C] px-6 py-3 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Latest Articles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#232C5C] mb-4">
              Explore Our <span className="text-[#F68036]">Blog</span>
            </h2>
            <p className="text-lg text-[#232C5C]/70 max-w-2xl mx-auto">
              Discover helpful tips, market insights, and expert advice for renters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="bg-white rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-100">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      onError={e => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }} 
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-[#232C5C]/60 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Badge variant="outline" className="mb-3 text-xs border-[#F68036]/30 text-[#F68036]">
                      {post.category}
                    </Badge>
                    
                    <h3 className="text-xl font-bold mb-3 text-[#232C5C] group-hover:text-[#F68036] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-[#232C5C]/70 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-[#F68036] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Read Article
                      <BookOpen className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4 text-[#232C5C]">No articles found</h3>
              <p className="text-[#232C5C]/70 mb-6">Try adjusting your search or filter criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-[#F68036] hover:bg-[#F68036]/90 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F68036] to-[#F68036]/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Need Help Finding Your Perfect Apartment?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our local experts can guide you through the entire process and find you the perfect home.
            </p>
            <Button 
              size="lg"
              className="bg-white text-[#F68036] hover:bg-white/90 font-semibold px-8 py-4 text-lg rounded-xl"
            >
              Get Free Apartment Help
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;