import { Link, useLocation } from 'react-router-dom';
import { ReactNode, useEffect, useState } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen" style={{ opacity: 1 }}>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b py-5 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-slate-200' : 'bg-transparent border-transparent'}`}>
        <div className="container-custom flex items-center justify-between">
          <Link className="text-xl font-bold tracking-tight text-slate-900" to="/">
            Endless Instant Leads
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              How It Works
            </a>
            <Link className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" to="/example-leads">
              Example Leads
            </Link>
            <a href="/#faq" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="/#contact" className="btn-primary text-sm py-2.5 inline-block">
              Start the Conversation
            </a>
          </div>
        </div>
      </header>
      <main className="pt-24">{children}</main>
      <footer className="bg-slate-900 text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-slate-800">
            <div>
              <Link className="text-xl font-bold tracking-tight" to="/">
                Endless Instant Leads
              </Link>
              <p className="text-slate-400 text-sm mt-2 max-w-xs">
                Reach buyers the moment they search for your service.
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
            <p>© 2026 Endless Instant Leads. All rights reserved.</p>
            <p>Powered by AI & Big Data Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
