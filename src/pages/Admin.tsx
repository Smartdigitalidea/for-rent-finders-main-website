
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminBlogGenerator from '@/components/AdminBlogGenerator';

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto px-4 my-[60px]">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Generate and manage blog content
            </p>
          </div>
          
          <AdminBlogGenerator />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
