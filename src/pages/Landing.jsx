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
          <p>Evinize nefes aldıran, bakımı kolay ve estetik bitkiler.</p>
          <Link className="cta" to="/products">Get Started</Link>
        </div>
      </div>
    </section>
  );
}