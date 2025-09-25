import { useState } from "react";
import "./TestimonialSlider.css";

const testimonialsData = [
  {
    text: "The BE'NTE SEB volunteers showed incredible compassion during my treatment. They provided emotional support that helped me and my family get through a difficult time. Their dedication to patient care is truly remarkable.",
    name: "Abel Birhanu",
    role: "Patient",
  },
  {
    text: "The volunteers helped me navigate hospital procedures and offered guidance that made a huge difference during my recovery.",
    name: "Selam Tesfaye",
    role: "Caregiver",
  },
  {
    text: "Working with BE'NTE SEB Association has been rewarding. They provide consistent support for patients and community wellness.",
    name: "Dr. Hana Alemu",
    role: "Healthcare Professional",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <p>
        Hear from patients, caregivers, healthcare professionals, and our members
        about their experiences with BE'NTE SEB Association.
      </p>
      <div className="testimonial-card">
        <span className="arrow left" onClick={prevTestimonial}>&lt;</span>
        <div className="testimonial-content">
          <p>"{testimonialsData[current].text}"</p>
          <h4>{testimonialsData[current].name}</h4>
          <span>{testimonialsData[current].role}</span>
        </div>
        <span className="arrow right" onClick={nextTestimonial}>&gt;</span>
      </div>
    </section>
  );
}

export default Testimonials;
