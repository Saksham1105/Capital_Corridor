/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { WhyUs } from './pages/WhyUs';
import { Services } from './pages/Services';
import { CapitalMarkets } from './pages/CapitalMarkets';
import { IndustrySolutions } from './pages/IndustrySolutions';
import { Resources } from './pages/Resources';
import { FinancialTools } from './pages/FinancialTools';
import { OurTeam } from './pages/OurTeam';
import { ContactUs } from './pages/ContactUs';
import { LegalDisclaimer } from './pages/LegalDisclaimer';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/capital-markets" element={<CapitalMarkets />} />
            <Route path="/industry-solutions" element={<IndustrySolutions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calculators" element={<FinancialTools />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
            
            {/* Legacy Redirects */}
            <Route path="/our-process" element={<Navigate to="/about#how-our-service-works" replace />} />
            <Route path="/capital-markets" element={<Navigate to="/services/capital-markets" replace />} />
            <Route path="/challenging-cases" element={<Navigate to="/industry-solutions" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
