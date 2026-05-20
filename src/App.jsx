import AgentChat from "./components/AgentChat.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LogoStrip from "./components/LogoStrip.jsx";
import MetricsSection from "./components/MetricsSection.jsx";
import PlatformSection from "./components/PlatformSection.jsx";
import PricingSection from "./components/PricingSection.jsx";
import ResourcesSection from "./components/ResourcesSection.jsx";
import SecuritySection from "./components/SecuritySection.jsx";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <LogoStrip />
        <PlatformSection />
        <SecuritySection />
        <MetricsSection />
        <PricingSection />
        <ResourcesSection />
        <CtaSection />
      </main>
      <Footer />
      <AgentChat />
    </>
  );
}

export default App;
