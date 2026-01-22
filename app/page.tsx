import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Units from "@/components/units";
import Packages from "@/components/packages";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main
      className="
bg-slate-50 
dark:bg-slate-950 
text-slate-900 
dark:text-slate-100
transition-colors duration-500
"
    >
      <Header />
      <Hero />
      <About />
      <Units />
      <Packages />
      <Gallery />
      <Footer />
    </main>
  );
}
