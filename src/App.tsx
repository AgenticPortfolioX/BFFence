/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/CTA_Footer';
import { Home } from './pages/Home';
import { ServiceArea } from './pages/ServiceArea';
import { OurTeam } from './pages/OurTeam';
import { Reviews } from './pages/Reviews';
import { AboutUs } from './pages/AboutUs';
import { Updates } from './pages/Updates';
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
          <Route path="/updates" element={<Updates />} />
          <Route path="/free-estimate" element={<FreeEstimate />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <Link 
          to="/service-area" 
          className="fixed bottom-6 right-6 z-50 bg-accent text-background px-6 py-4 rounded-xl shadow-[0_20px_50px_rgba(226,176,94,0.4)] font-black uppercase tracking-widest text-center hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 group"
        >
          <div className="leading-tight">Scope &</div>
          <div className="leading-tight">Services</div>
        </Link>
      </main>
    </Router>
  );
}
