import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Insights = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const contentDiv = document.getElementById('ms-blog-content');
    if (!contentDiv || !contentDiv.parentElement) return;

    // Clean up any previous script to avoid duplicates on React StrictMode re-mounts
    if (scriptRef.current) {
      scriptRef.current.remove();
      scriptRef.current = null;
    }

    const script = document.createElement('script');
    script.src = 'https://www.overrank.ai/embed.js';
    script.setAttribute('data-site', 'Forrentfinders.com');
    script.setAttribute('data-path', '/insights');
    // Synchronous execution keeps the embed in the same document position and
    // makes document.currentScript available for the embed to read its attributes.
    script.async = false;

    scriptRef.current = script;
    // Insert the script right after the content div, matching the original snippet layout.
    contentDiv.parentElement.insertBefore(script, contentDiv.nextSibling);

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div id="ms-blog-content">Loading…</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
