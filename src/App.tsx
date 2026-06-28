import Nav from "./components/Nav";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Members from "./components/Members";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-bone">
      <Nav />
      <main>
        <Hero />
        <div className="gold-rule mx-auto w-40" />
        <QuienesSomos />
        <Members />
        <Gallery />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
