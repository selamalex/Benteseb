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
          <p>To enhance patient care through innovative student-led initiatives and foster a supportive environment for both patients and healthcare providers at Black Lion Specialized Hospital.</p>
        </div>
        <div className="card vision">
          <div className="icon-container">
            <FaEye className="icon" />
          </div>
          <h3>Vision</h3>
          <p>To be a leading student association in healthcare, known for its commitment to excellence and compassionate care.</p>
        </div>
        <div className="card values">
          <div className="icon-container">
            <FaHeart className="icon" />
          </div>
          <h3>Values</h3>
          <p>Rooted in compassion, excellence, innovation, collaboration, integrity, and service.  Guiding us to care with empathy, strive for the highest standards, create solutions, work together, act with honesty, and give back to our community.</p>
        </div>
        <div className="card legal">
          <div className="icon-container">
            <FaCertificate className="icon" />
          </div>
          <h3>Legal Recognition</h3>
          <p>legally registered and recognized by FDRE Civil Society Organization since December, 2024.</p>
        </div>
      </div>
    </section>
  );
}