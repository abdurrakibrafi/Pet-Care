import Herosection from "../components/Herosection";
import Navbar from "../components/Navbar";
import About from "./About";
import Blog from "./Blog";
import Counter from "./Counter";
import Doctor from "./Doctor";
import Faq from "./Faq";
import Footer from "./Footer";
import From from "./From";
import Gallery from "./Gallery";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Herosection />
      <About />
      <Counter />
      <Faq />
      <Doctor />
      <Gallery />
      <Blog />
      <From />
      <Footer />
    </div>
  );
}

export default Home;
