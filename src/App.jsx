import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import SkipLink from './components/SkipLink';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import WorkingModes from './components/WorkingModes';
import Technology from './components/Technology';
import Materials from './components/Materials';
import Stats from './components/Stats';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <SEOHead />
      <SkipLink />
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Hero />
        <ProductShowcase />
        <WorkingModes />
        <Technology />
        <Materials />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
