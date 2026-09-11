import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Research } from '@/components/sections/Research';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-foreground">
      {/* Background decorative elements */}
      <div className="bg-deco-top-line" />
      <div className="bg-deco-side-line" />
      <div className="bg-deco-circle" />
      <div className="bg-deco-corner-cross" />

      <Navbar theme={theme} toggleTheme={toggle} />
      <Hero />
      <About />
      <Research />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;