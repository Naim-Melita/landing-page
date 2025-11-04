import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Porfolio";
import Testimonials from "./components/WhychooseUs";
// import Contact from "./components/Contact";


export default function App() {
  return (
  

    <div className=" relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Testimonials />
        <Portfolio />
      
        {/* <Contact /> */}
      </main>

    </div>
  );
}

