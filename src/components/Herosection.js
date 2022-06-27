import img from "../assets/images/background.jpg";
import "../style/Hero.css";

function Herosection() {
  const scrollBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  return (
    <div className="hero">
      <img className="hero_img" src={img} alt="" />
      <div className="overlay"></div>
      <h1 className="hero_text1 position-absolute top-50 start-50 translate-middle">
        Highest Quality Care For Pets You'll Love
      </h1>
      <button className="button1 position-absolute top-50 start-50 translate-middle">
        Learn More
      </button>
      <a onClick={scrollBottom} id="scroll_btn"></a>
    </div>
  );
}

export default Herosection;
