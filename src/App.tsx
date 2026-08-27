import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhychooseUs";
import PricingTable from "./components/PricingTable";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import TrustedBy from "./components/TrustedBy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-armelix-background">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <PricingTable />
      <TrustedBy />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
