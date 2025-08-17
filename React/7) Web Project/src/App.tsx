import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Products from "./components/products";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
