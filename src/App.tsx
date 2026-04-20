import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Testimonials from "./components/WhychooseUs";
import PricingTable from "./components/PricingTable"; 
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";


export default function App() {
  return (
  

    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-armelix-background">
      <Header />
        <Hero />
        <PricingTable />
        <Testimonials />
        <FAQ />
        <Contact />
        <TrustedBy />

        <Footer />
 

    </div>
  );
}
