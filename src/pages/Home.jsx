import useReveal from "../hooks/useReveal";

import Navbar from "../components/common/Navbar";
import HeroSlider from "../components/hero/HeroSlider";
import Categories from "../components/sections/Categories";
import Causes from "../components/sections/Causes";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import Impact from "../components/sections/Impact";
import News from "../components/sections/News";
import Sponsors from "../components/sections/Sponsors";
import Gallery from "../components/sections/Gallery";
import CTA from "../components/common/CTA";
import Footer from "../components/common/Footer";

const Home = () => {
  // Enable global reveal animations (fade-up)
  useReveal();

  return (
    <>
      <Navbar />
      <HeroSlider />

      {/* Scroll-reveal sections */}
      <Categories />
      <Causes />
      <About />
      <Programs />
      <Impact />
      <News />
      <Sponsors />
      <Gallery />
      <CTA />

      <Footer />
    </>
  );
};

export default Home;
