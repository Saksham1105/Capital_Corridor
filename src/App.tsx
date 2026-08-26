/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { WhyUs } from './pages/WhyUs';
import { Services } from './pages/Services';
import { CapitalMarkets } from './pages/CapitalMarkets';
import { ChallengingCases } from './pages/ChallengingCases';
import { OurTeam } from './pages/OurTeam';
import { OurProcess } from './pages/OurProcess';
import { ContactUs } from './pages/ContactUs';
import { LegalDisclaimer } from './pages/LegalDisclaimer';

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
            <Route path="/capital-markets" element={<CapitalMarkets />} />
            <Route path="/challenging-cases" element={<ChallengingCases />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
