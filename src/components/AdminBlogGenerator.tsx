
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, FileText, CheckCircle, Calendar, BarChart3, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminBlogGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPosts, setGeneratedPosts] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);
  const { toast } = useToast();

  const generateBlogPosts = async () => {
    setIsGenerating(true);
    setGeneratedPosts([]);

    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      toast({
        title: "Generating Blog Posts with DeepSeek",
        description: "This may take a few minutes. Please wait...",
      });

      const { data, error } = await supabase.functions.invoke('generate-blog-posts');

      if (error) {
        throw error;
      }

      setGeneratedPosts(data.posts || []);
      
      toast({
        title: "Success!",
        description: `Generated ${data.posts?.length || 0} blog posts successfully with DeepSeek AI`,
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

  const fetchAutomationLogs = async () => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const { data, error } = await supabase
        .from('automated_blog_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setLogs(data || []);
      
      toast({
        title: "Logs Updated",
        description: "Fetched latest automation logs",
      });
    } catch (error) {
      console.error('Error fetching logs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch automation logs",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            DeepSeek AI Blog Generator
          </CardTitle>
          <CardDescription>
            Generate SEO-optimized blog posts using DeepSeek AI - faster and more cost-effective than OpenAI
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
                Generating with DeepSeek AI...
              </>
            ) : (
              <>
                <FileText className="w-4 h-4 mr-2" />
                Generate 10 Blog Posts with DeepSeek
              </>
            )}
          </Button>

          {generatedPosts.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Generated Posts ({generatedPosts.length})
              </h3>
              <div className="space-y-2">
                {generatedPosts.map((post, index) => (
                  <div key={post.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">
                        {index + 1}. {post.title}
                      </span>
                      {post.featured && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-green-600">{post.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
            <strong>DeepSeek AI Advantages:</strong>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>10x more cost-effective than OpenAI GPT-4</li>
              <li>High-quality content generation with local expertise</li>
              <li>Same API compatibility as OpenAI</li>
              <li>Optimized for long-form content (1200+ words)</li>
              <li>Better value for automated posting systems</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Automation Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Automated Posting Schedule
          </CardTitle>
          <CardDescription>
            Blog posts are automatically generated and published twice weekly
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-800">Monday Posts</span>
              </div>
              <p className="text-sm text-blue-600">
                Market updates, financial tips, and rental advice
              </p>
              <p className="text-xs text-blue-500 mt-1">
                Every Monday at 9:00 AM EST
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-purple-800">Friday Posts</span>
              </div>
              <p className="text-sm text-purple-600">
                Lifestyle content, neighborhood guides, weekend reads
              </p>
              <p className="text-xs text-purple-500 mt-1">
                Every Friday at 9:00 AM EST
              </p>
            </div>
          </div>

          <Button 
            onClick={fetchAutomationLogs}
            variant="outline"
            className="w-full"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            View Automation Logs
          </Button>

          {logs.length > 0 && (
            <div className="mt-4">
              <h4 className="font-medium mb-2">Recent Automation Activity</h4>
              <div className="space-y-2">
                {logs.map((log) => (
                  <div key={log.id} className="p-2 bg-gray-50 rounded text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{log.schedule_type} - {log.status}</span>
                      <span className="text-xs text-gray-500">
                        {new Date(log.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    {log.topic && (
                      <p className="text-xs text-gray-600 mt-1">{log.topic}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBlogGenerator;
