
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogManager from '@/components/admin/BlogManager';
import PropertyManager from '@/components/admin/PropertyManager';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto px-4 my-[60px]">
          <Tabs defaultValue="properties" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            </TabsList>
            <TabsContent value="properties">
              <PropertyManager />
            </TabsContent>
            <TabsContent value="blog">
              <BlogManager />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
