
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, FileText, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminBlogGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPosts, setGeneratedPosts] = useState<any[]>([]);
  const { toast } = useToast();

  const generateBlogPosts = async () => {
    setIsGenerating(true);
    setGeneratedPosts([]);

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      toast({
        title: "Generating Blog Posts",
        description: "This may take a few minutes. Please wait...",
      });

      const { data, error } = await supabase.functions.invoke('generate-blog-posts');

      if (error) {
        throw error;
      }

      setGeneratedPosts(data.posts || []);
      
      toast({
        title: "Success!",
        description: `Generated ${data.posts?.length || 0} blog posts successfully`,
      });

    } catch (error) {
      console.error('Error generating blog posts:', error);
      toast({
        title: "Error",
        description: "Failed to generate blog posts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Blog Post Generator
          </CardTitle>
          <CardDescription>
            Generate 10 SEO-optimized blog posts with current rental market trends using AI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={generateBlogPosts} 
            disabled={isGenerating}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Blog Posts...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Generate 10 Blog Posts
              </>
            )}
          </Button>

          {generatedPosts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Generated Posts
              </h3>
              <div className="space-y-2">
                {generatedPosts.map((post, index) => (
                  <div key={post.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-sm font-medium text-green-800">
                      {index + 1}. {post.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
            <strong>What will be generated:</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>10 comprehensive blog posts (1200-1800 words each)</li>
              <li>SEO-optimized content with current 2025 trends</li>
              <li>Relevant stock images from Unsplash</li>
              <li>Proper categorization and featured post selection</li>
              <li>HTML-formatted content for better readability</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBlogGenerator;
