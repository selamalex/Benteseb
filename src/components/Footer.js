import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/images/logo.png" alt="Logo" />
        <p>
          A student-led healthcare support organization dedicated to improving
          patient care and wellness.
        </p>
      </div>
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#membership">Membership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>Black Lion Specialized Hospital, Addis Ababa, Ethiopia</p>
        <p>Email: info@benteseb.org</p> {/* I am going to change this later by the real email */}
        <p>Phone: +251 900 000 000</p> {/* and this too */}
      </div>
    </footer>
  );
}
