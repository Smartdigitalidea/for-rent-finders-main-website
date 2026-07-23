import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Insights = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.overrank.ai/embed.js';
    script.setAttribute('data-site', 'Forrentfinders.com');
    script.setAttribute('data-path', '/insights');
    script.async = true;
    document.getElementById('ms-blog-content-wrapper')?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div id="ms-blog-content-wrapper">
            <div id="ms-blog-content">Loading…</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
