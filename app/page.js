import TopNotice from '../components/TopNotice';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SoftwareEcosystem from '../components/SoftwareEcosystem';
import Industries from '../components/Industries';
import ServicesCarousel from '../components/ServicesCarousel';
import ServicesGallery from '../components/ServicesGallery';
import WebEngineering from '../components/WebEngineering';
import EnterpriseSystems from '../components/EnterpriseSystems';
import ServiceShowcase from '../components/ServiceShowcase';
import WhyValtix from '../components/WhyValtix';
import OnboardingSteps from '../components/OnboardingSteps';
import PricingDeck from '../components/PricingDeck';
import FaqSection from '../components/FaqSection';
import ConsultationContact from '../components/ConsultationContact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <TopNotice />
      <Navbar />
      <main>
        <Hero />
        <SoftwareEcosystem />
        <Industries />
        <ServicesCarousel />
        <ServicesGallery />
        <WhyValtix />
        <ServiceShowcase />
        <OnboardingSteps />
        <PricingDeck />
        <FaqSection />
        <WebEngineering />
        <EnterpriseSystems />
        <ConsultationContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
