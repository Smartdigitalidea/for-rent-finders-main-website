
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogManager from '@/components/admin/BlogManager';

const Admin = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto px-4 my-[60px]">
          <BlogManager />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
