import { lazy, Suspense } from "react";
import "./App.css";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Service = lazy(() => import("./components/Service/Service"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Hero />
      <Service />
      <Blog />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
