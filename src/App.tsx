import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/CTA_Footer';
import { Home } from './pages/Home';
import { ServiceArea } from './pages/ServiceArea';
import { OurTeam } from './pages/OurTeam';
import { Reviews } from './pages/Reviews';
import { AboutUs } from './pages/AboutUs';
import { BlogPosts } from './pages/BlogPosts';
import { BlogPost } from './pages/BlogPost';
import { FreeEstimate } from './pages/FreeEstimate';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen font-sans selection:bg-accent selection:text-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/updates" element={<BlogPosts />} />
          <Route path="/free-estimate" element={<FreeEstimate />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
