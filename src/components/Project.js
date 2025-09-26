import "./Projects.css";

const completedProjects = [
  {
    title: "Team Build-Up Project at TAPCCO",
    date: "Nov 16, 2024",
    description:
      "In celebration of the birthdays of our brave children for the month of Hidar, we managed to raise 5,120 birr in donations. This achievement was made possible through the generosity and active participation of our members, fellow students, and the wider community. Together, we turned a special day into a memorable celebration of hope and joy.",
  },
  {
    title: "Blood Donation Campaign",
    date: "Jan 13, 2025",
    description:
      "Over 20 medical students gathered at the National Blood Bank, donating blood. Each donation was not just blood, but a gift of life and hope to those in need.",
  },
  {
    title: "Ziyara in Black Lion",
    date: "March 28, 2025",
    description:
      "In the spirit of compassion during Ramadan, we visited the pediatrics ward to comfort and support Muslim patients in need, bringing smiles and warmth.",
  },
  {
    title: "Eid al-Fitr at Black Lion",
    date: "March 29, 2025",
    description:
      "Our team of dedicated volunteers contributed to decorations and celebrations, bringing joy and vibrance to the event.",
  },
  {
    title: "Free Screening for People with Hearing Disabilities",
    date: "July 6, 2025",
    description:
      "The first-ever free screening, diagnosis, and treatment session for people with hearing disabilities in collaboration with the Ethiopian Association of the Deaf and GIV Ethiopia.",
  },
];

const ongoingProjects = [
  {
    title: "Hearts of Hope",
    description:
      "A yearlong project aiming to raise awareness about cardiac health and spearhead fundraising campaigns to support this vital cause.",
  },
  {
    title: "Monthly Ward Visit",
    description:
      "Every month, members visit patients, raise funds, and help cover treatment costs, spreading smiles and meaningful support.",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>
        Our <span>Projects</span>
      </h2>

      <h3 className="category">Completed</h3>
      <div className="project-cards">
        {completedProjects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h4>{project.title}</h4>
            <span className="date">{project.date}</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <h3 className="category">Ongoing</h3>
      <div className="project-cards">
        {ongoingProjects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
