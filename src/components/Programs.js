import {
  GraduationCap,
  Heart,
  Languages,
  MonitorSmartphone,
  Users,
} from "lucide-react";
import "./Programs.css";

const programs = [
  {
    title: "Department of Psychological Support",
    description:
      "Provides emotional support by organizing patient visits, assigning volunteers, and collaborating with Black Lion Hospital social workers.",
    color: "#FF4D4D",
    icon: <Heart size={40} />,
  },
  {
    title: "Department of Community Outreach",
    description:
      "Promotes health education through fairs, screenings, partnerships, and fundraising to encourage preventive care and healthier lifestyles.",
    color: "#27AE60",
    icon: <Users size={40} />,
  },
  {
    title: "Department of Capacity Building",
    description:
      "Strengthens knowledge and skills by offering training sessions and workshops for members and volunteers.",
    color: "#2980B9",
    icon: <GraduationCap size={40} />,
  },
  {
    title: "Department of Language",
    description:
      "Bridges communication gaps by addressing language barriers, offering sign language support, and creating clear multilingual hospital way-finding signs.",
    color: "#9B59B6",
    icon: <Languages size={40} />,
  },
  {
    title: "Department of Digital Health",
    description:
      "Leverages technology to solve hospital challenges, from developing sign-language translation apps to producing digital tools for health promotion.",
    color: "#F39C12",
    icon: <MonitorSmartphone size={40} />,
  },
];

function Programs() {
  return (
    <section className="programs" id="programs">
      <h2>
        Our <span>Departments</span>
      </h2>
      <p>
        We are organized into specialized departments that address diverse needs,
        from emotional support to digital innovation, ensuring holistic care and
        community impact.
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
