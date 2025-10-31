import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Porfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


export default function App() {
  return (
  

    <div className=" relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

    </div>
  );
}

