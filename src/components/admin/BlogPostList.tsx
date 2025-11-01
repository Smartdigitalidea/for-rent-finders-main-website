
import { useState } from 'react';
import { Search, Edit, Eye, Trash2, MoreHorizontal, Calendar, Tag, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  status: string;
  featured: boolean;
  published_at: string;
  created_at: string;
  image_url: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
  loading: boolean;
  onEdit: (post: BlogPost) => void;
  onRefresh: () => void;
}

const BlogPostList = ({ posts, loading, onEdit, onRefresh }: BlogPostListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const { toast } = useToast();

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const categories = Array.from(new Set(posts.map(post => post.category)));

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
      onRefresh();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    }
  };

  const handleStatusChange = async (postId: string, newStatus: string) => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { error } = await supabase
        .from('blog_posts')
        .update({ 
          status: newStatus,
          published_at: newStatus === 'published' ? new Date().toISOString() : undefined
        })
        .eq('id', postId);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Post ${newStatus === 'published' ? 'published' : 'updated'} successfully`,
      });
      onRefresh();
    } catch (error) {
      console.error('Error updating post status:', error);
      toast({
        title: "Error",
        description: "Failed to update post status",
        variant: "destructive",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'published': return 'default';
      case 'draft': return 'secondary';
      case 'scheduled': return 'outline';
      case 'archived': return 'destructive';
      default: return 'secondary';
    }
  };

  const exportToGoogleSheets = () => {
    const headers = ['Title', 'Category', 'Author', 'Status', 'Published Date', 'Excerpt'];
    const rows = filteredPosts.map(post => [
      post.title,
      post.category,
      post.author,
      post.status,
      post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Not published',
      post.excerpt
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blog-posts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    toast({
      title: "Exported",
      description: "Blog posts exported. Import this CSV file into Google Sheets.",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-40">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={exportToGoogleSheets} variant="outline" className="gap-2 shrink-0">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      {/* Posts Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-12 h-12 rounded object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                    <div>
                      <div className="font-medium">{post.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {post.excerpt}
                      </div>
                      {post.featured && (
                        <Badge variant="outline" className="mt-1">
                          <Tag className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{post.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(post.status)}>
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.published_at).toLocaleDateString()}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(post)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </DropdownMenuItem>
                      {post.status === 'draft' && (
                        <DropdownMenuItem 
                          onClick={() => handleStatusChange(post.id, 'published')}
                        >
                          Publish
                        </DropdownMenuItem>
                      )}
                      {post.status === 'published' && (
                        <DropdownMenuItem 
                          onClick={() => handleStatusChange(post.id, 'draft')}
                        >
                          Unpublish
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem 
                        onClick={() => handleDelete(post.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-bold mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all'
              ? 'Try adjusting your search or filter criteria.'
              : 'Create your first blog post to get started.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
