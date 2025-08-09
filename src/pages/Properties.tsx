import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Properties = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 container mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Properties</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore curated apartments across Fort Lauderdale and Miami. Inquire to get personalized listings.
          </p>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <article key={i} className="luxury-card rounded-2xl p-6">
              <div className="aspect-video rounded-xl bg-accent/30 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Featured Property {i}</h2>
              <p className="text-sm text-muted-foreground">Request tailored options — our service is 100% free.</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
