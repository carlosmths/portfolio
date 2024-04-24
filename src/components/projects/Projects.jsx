import 'components/projects/Projects.scss';
import cryptoMarketPalaceImg from 'assets/cryptomp.png';
import ActionLink from 'components/action-link/ActionLink';
import { ReactComponent as OpenIcon } from 'assets/icon-open.svg';
import { ReactComponent as GithubDarkIcon } from 'assets/icon-github-dark.svg';
import React from 'react';

const Projects = () => {
  const projectsList = [
    {
      name: "Crypto Market Palace",
      summary: "The project revolves around a user-friendly interface for exploring and tracking cryptocurrency values. Although it is not a fully functional trading platform, it utilizes APIs to retrieve real-time market data for various cryptocurrencies. With a sleek and responsive design, Cryptomarketpalace offers a glimpse into what a simple cryptocurrency trading website could look like.",
      link: "https://www.cryptomp.carlosmths.com",
      sourceCodeLink: "https://github.com/carlosmths/cryptomarketpalace",
      backgroundImage: cryptoMarketPalaceImg
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