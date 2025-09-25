import "./Programs.css";

const programs = [
  {
    title: "Patient Support",
    description:
      "Providing emotional support, companionship, and assistance to patients and their families during hospital stays and treatment periods.",
    color: "#FF4D4D",
    icon: "❤️",
  },
  {
    title: "Student Training",
    description:
      "Organizing training sessions for healthcare students on patient interaction, ethics, and professional development.",
    color: "#5B7FFF",
    icon: "🎓",
  },
  {
    title: "Medical Assistance",
    description:
      "Supporting healthcare staff with patient care activities and administrative tasks under proper supervision.",
    color: "#2ECC71",
    icon: "🩺",
  },
  {
    title: "Fund Raising",
    description:
      "Raising funds to support medical equipment, patient care supplies, and community health initiatives through various events.",
    color: "#F5A623",
    icon: "💰",
  },
  {
    title: "Partnership Building",
    description:
      "Establishing partnerships with healthcare institutions, NGOs, and community organizations for collaborative projects.",
    color: "#9B59B6",
    icon: "🤝",
  },
];

function Programs() {
  return (
    <section className="programs" id="programs">
      <h2>
        Our Programs <span>& Activities</span>
      </h2>
      <p>
        We run comprehensive programs designed to support patients, educate
        communities, and develop healthcare professionals.
      </p>
      <div className="program-cards">
        {programs.map((program, idx) => (
          <div
            className="program-card"
            key={idx}
            style={{ borderColor: program.color }}
          >
            <div className="icon" style={{ color: program.color }}>
              {program.icon}
            </div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
