import 'components/projects/Projects.scss';
import project1Image from 'assets/project-1.jpg';
import project2Image from 'assets/project-2.jpg';
import project3Image from 'assets/project-3.jpg';
import project4Image from 'assets/project-4.jpg';
import ActionLink from 'components/action-link/ActionLink';
import { ReactComponent as OpenIcon } from 'assets/icon-open.svg';
import { ReactComponent as GithubDarkIcon } from 'assets/icon-github-dark.svg';
import React from 'react';

const Projects = () => {
  const projectsList = [
    {
      name: "Project 1",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare risus turpis, scelerisque commodo orci placerat quis. Curabitur maximus accumsan euismod. Sed sed ipsum dignissim purus porta viverra et ac mi. Suspendisse sodales orci ac est bibendum, eget hendrerit orci congue.",
      link: "https://circle.com",
      sourceCodeLink: "https://github.com",
      backgroundImage: project1Image
    },
    {
      name: "Project 2",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare risus turpis, scelerisque commodo orci placerat quis. Curabitur maximus accumsan euismod. Sed sed ipsum dignissim purus porta viverra et ac mi.",
      link: "https://teikametrics.com",
      sourceCodeLink: "https://github.com",
      backgroundImage: project2Image
    },
    {
      name: "Project 3",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare risus turpis, scelerisque commodo orci placerat quis. Curabitur maximus accumsan euismod. Sed sed ipsum dignissim purus porta viverra et ac mi.",
      link: "https://binance.com",
      sourceCodeLink: "https://github.com",
      backgroundImage: project3Image
    },
    {
      name: "Project 4",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare risus turpis, scelerisque commodo orci placerat quis. Curabitur maximus accumsan euismod. Sed sed ipsum dignissim purus porta viverra et ac mi.",
      link: "https://hertz.com",
      sourceCodeLink: "https://github.com",
      backgroundImage: project4Image
    },
  ]

  return (
    <div className="projects">
      <h3>MY PROJECTS</h3>
      <div className="projects-container">
        {projectsList.map((project, index) =>
          <React.Fragment key={`project-card-${index}`}>
            <div className="project-card">
              <img className="project-image" src={project.backgroundImage} alt={project.name} />
              <div className="project-info">
                <h4>{project.name}</h4>
                <p>{project.summary}</p>
                <div className="links-container">
                  <ActionLink href={`${project.link}`} target="_blank" rel="noreferrer" icon={<OpenIcon />}>Live demo</ActionLink>
                  <ActionLink href={`${project.sourceCodeLink}`} target="_blank" rel="noreferrer" icon={<GithubDarkIcon />}>Source code</ActionLink>
                </div>
              </div>
            </div>
            {index < projectsList.length - 1 && <hr />}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default Projects;