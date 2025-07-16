import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
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

  // Sample blog posts - in real app, this would come from your ChatGPT API
  const samplePosts: BlogPost[] = [
    {
      id: 1,
      title: "The Best Neighborhoods in Miami for Renters in 2025",
      excerpt: "Discover the hottest neighborhoods in Miami with our comprehensive guide to finding the perfect rental location.",
      content: "Full blog content here...",
      author: "Maria Rodriguez",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Neighborhoods",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How to Budget for Your First Apartment",
      excerpt: "Essential budgeting tips for first-time renters to ensure you find an affordable apartment without breaking the bank.",
      content: "Full blog content here...",
      author: "David Chen",
      date: "2025-01-12",
      readTime: "7 min read",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Studio vs 1-Bedroom: What's Best for You?",
      excerpt: "Compare the pros and cons of studio apartments versus one-bedroom units to make the right choice.",
      content: "Full blog content here...",
      author: "Sarah Johnson",
      date: "2025-01-10",
      readTime: "4 min read",
      category: "Apartment Types",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "How Credit Score Affects Apartment Approval",
      excerpt: "Understanding the role of credit scores in apartment applications and how to improve your chances.",
      content: "Full blog content here...",
      author: "Michael Torres",
      date: "2025-01-08",
      readTime: "6 min read",
      category: "Credit & Approval",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      featured: true
    },
    {
      id: 5,
      title: "Fort Lauderdale vs Miami: Where Should You Live?",
      excerpt: "A detailed comparison of living in Fort Lauderdale versus Miami, covering costs, lifestyle, and amenities.",
      content: "Full blog content here...",
      author: "Lisa Park",
      date: "2025-01-05",
      readTime: "8 min read",
      category: "City Comparison",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Luxury Amenities That Are Actually Worth It",
      excerpt: "Which luxury apartment amenities provide real value and which ones are just marketing fluff.",
      content: "Full blog content here...",
      author: "James Wilson",
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Luxury Living",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 1000);
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading latest articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gold/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-deep transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 luxury-text-glow">
              Rental Insights & 
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent"> Expert Advice</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest trends, tips, and insights for finding your perfect apartment in Miami and Fort Lauderdale.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 luxury-card border-0 bg-card/80 backdrop-blur-sm"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'luxury-button text-primary-foreground border-0' 
                        : 'hover:bg-primary/10 hover:border-primary/30'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <Tag className="w-3 h-3 mr-1" />
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
        <section className="py-16 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 fade-in-up">Featured Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={post.id} className={`luxury-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:luxury-glow ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Badge className="mb-4 luxury-button border-0">{post.category}</Badge>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in-up">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={post.id} className={`luxury-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:luxury-glow fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Badge variant="outline" className="mb-3 text-xs">{post.category}</Badge>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;