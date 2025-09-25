import { FaBook, FaHeart, FaMedal, FaStar } from "react-icons/fa";
import "./Membership.css";

const benefits = [
  { title: "Exclusive Events", desc: "Special access to conferences and workshops", icon: <FaStar color="gold" /> },
  { title: "Recognition", desc: "Official recognition for volunteer work", icon: <FaMedal color="green" /> },
  { title: "Resources", desc: "Access to learning materials and guides", icon: <FaBook color="blue" /> },
  { title: "Impact", desc: "Regular updates on your contributions", icon: <FaHeart color="red" /> },
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
    </section>
  );
}

export default Membership;
