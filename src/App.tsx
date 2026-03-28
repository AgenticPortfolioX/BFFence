/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/CTA_Footer';
import { Home } from './pages/Home';
import { ServiceArea } from './pages/ServiceArea';
import { OurTeam } from './pages/OurTeam';
import { Reviews } from './pages/Reviews';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Accessibility } from './pages/Accessibility';
import { FreeEstimate } from './pages/FreeEstimate';

export default function App() {
  return (
    <Router basename="/BFFence">
      <main className="min-h-screen font-sans selection:bg-accent selection:text-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/free-estimate" element={<FreeEstimate />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
