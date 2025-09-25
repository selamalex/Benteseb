import { FaBullseye, FaCertificate, FaEye, FaHeart } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h2>ABOUT<span> US</span></h2>
      <p>
        Founded by passionate healthcare students, we are legally recognized
        and committed to making a meaningful difference in healthcare delivery
        and patient support.
      </p>
      <div className="about-cards">
        <div className="card mission">
          <div className="icon-container">
            <FaBullseye className="icon" />
          </div>
          <h3>Mission</h3>
          <p>To bridge the gap between healthcare providers and patients through compassionate support, education, and community outreach, while fostering professional development among healthcare students at Block Lion Specialized Hospital.</p>
        </div>
        <div className="card vision">
          <div className="icon-container">
            <FaEye className="icon" />
          </div>
          <h3>Vision</h3>
          <p>To be a leading student-led association in healthcare advocacy and patient support, creating a more compassionate and effective healthcare ecosystem for all.</p>
        </div>
        <div className="card values">
          <div className="icon-container">
            <FaHeart className="icon" />
          </div>
          <h3>Values</h3>
          <p>Integrity, compassion, service excellence, collaboration, and innovation guide everything we do in serving our community.</p>
        </div>
        <div className="card legal">
          <div className="icon-container">
            <FaCertificate className="icon" />
          </div>
          <h3>Legal Recognition</h3>
          <p>Officially recognized and registered under the Ethiopian Civil Society Organization Proclamation, with registration number 4567/2023.</p>
        </div>
      </div>
    </section>
  );
}