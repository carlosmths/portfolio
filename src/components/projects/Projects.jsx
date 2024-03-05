import 'components/projects/Projects.scss';

const Projects = () => {
  const projectsList = [
    {
      name: "Project 1",
      summary: "This is project number 1 and it's about something.",
      backgroundImage: "URL"
    },
    {
      name: "Project 2",
      summary: "This is project number 1 and it's about something.",
      backgroundImage: "URL"
    },
    {
      name: "Project 3",
      summary: "This is project number 1 and it's about something.",
      backgroundImage: "URL"
    },
    {
      name: "Project 4",
      summary: "This is project number 1 and it's about something.",
      backgroundImage: "URL"
    },
    {
      name: "Project 5",
      summary: "This is project number 1 and it's about something.",
      backgroundImage: "URL"
    }
  ]

  return (
    <div className="projects">
      <h3>MY PROJECTS</h3>
      <div className="projects-grid">
        {projectsList.map((project, key) =>
          <div className="project-card" key={key}>
            {project.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects;