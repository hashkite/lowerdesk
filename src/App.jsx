import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import SkipLink from './components/SkipLink';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyLowerdesk from './components/WhyLowerdesk';
import FloorSittingBenefits from './components/FloorSittingBenefits';
import VideoSection from './components/VideoSection';
import ProductShowcase from './components/ProductShowcase';
import WorkingModes from './components/WorkingModes';
import Technology from './components/Technology';
import Materials from './components/Materials';
import SpecsDetails from './components/SpecsDetails';
import Stats from './components/Stats';
import Community from './components/Community';
import FAQ from './components/FAQ';
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
        <WhyLowerdesk />
        <FloorSittingBenefits />
        <VideoSection />
        <ProductShowcase />
        <WorkingModes />
        <Technology />
        <Materials />
        <SpecsDetails />
        <Stats />
        <Community />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
