import { Link } from "react-router-dom";
import { withBase } from "../utils/basePath";

export default function Landing() {
  return (
    <section
      className="landing"
      style={{ backgroundImage: `url(${withBase('landing-bg.jpg')})` }}
    >
      <div className="overlay">
        <div className="landing-inner">
          <h1>Paradise Nursery</h1>
          <p>We bring nature into your home with curated, easy-care indoor plants.</p>
          <Link to="/products" className="cta">Get Started</Link>
        </div>
      </div>
    </section>
  );
}