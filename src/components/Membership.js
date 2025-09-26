import { FaBell, FaHandsHelping, FaMedal, FaUsers } from "react-icons/fa";
import "./Membership.css";

const benefits = [
  { 
    title: "Stay Informed", 
    desc: "Receive regular updates on our work and events.", 
    icon: <FaBell color="orange" /> 
  },
  { 
    title: "Get Involved", 
    desc: "Join training, volunteering, and outreach opportunities.", 
    icon: <FaHandsHelping color="teal" /> 
  },
  { 
    title: "Earn Recognition", 
    desc: "Receive recognition and certificates for active members.", 
    icon: <FaMedal color="green" /> 
  },
  { 
    title: "Build Connections", 
    desc: "Be part of a network that shares your values.", 
    icon: <FaUsers color="blue" /> 
  },
];

function Membership() {
  return (
    <section className="membership" id="membership">
      <h2>
        Membership <span>Benefits</span>
      </h2>
      <p>
        We run comprehensive programs designed to support patients, educate
        communities, and develop healthcare professionals.
      </p>
      <div className="membership-cards">
        {benefits.map((benefit, idx) => (
          <div className="membership-card" key={idx}>
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>

      <div className="join-button-container">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfqtpp_foSw5QSKH3MdjYIwQqQdTUFt8MLEvceklRWcCiUynw/closedform"
          target="_blank"
          rel="noopener noreferrer"
          className="join-button"
        >
          Become a Member
        </a>
      </div>
    </section>
  );
}

export default Membership;
