import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Porfolio";
import Testimonials from "./components/WhychooseUs";
import PricingTable from "./components/PricingTable"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";


export default function App() {
  return (
  

    <div className=" relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
        <Hero />
        <PricingTable />
        <Testimonials />
        <Portfolio />


        <Footer />

        {/* <Contact /> */}
        {/* <Contact /> */}
 

    </div>
  );
}

