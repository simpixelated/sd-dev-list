import React from 'react';
import groupBy from 'lodash/groupBy';
import kebabCase from 'lodash/kebabCase';

const ProjectCard = ({ project }) => (
  <div className="card mb-2">
    <div className="card-body">
      <h5 className="card-title">{project.title || `${project.neighborhood} ${project.type}`}</h5>
      {project.neighborhood && <h6 className="card-subtitle mb-2 text-muted">{project.neighborhood}</h6>}
      {project.location && <p className="card-subtitle mb-2 text-muted"><small>{project.location}</small></p>}
      {project.description && <p className="card-text">{project.description}</p>}
      {(project.start || project.end) &&
        <dl>
          {project.start &&
            <React.Fragment>
              <dt>Groundbreaking</dt>
              <dd>{project.start}</dd>
            </React.Fragment>
          }
          {project.end &&
            <React.Fragment>
              <dt>Completion</dt>
              <dd>{project.end}</dd>
            </React.Fragment>
          }
        </dl>
      }
      {project.address && <a className="card-link" href={`https://www.google.com/maps/place/${project.address}`}>Map</a>}
      {(project.links || []).length > 0 &&
        <ul className="mb-0">
          {project.links.map(link => (
            <li key={link}>
              <a className="small" href={link}>{link}</a>
            </li>
          ))}
        </ul>
      }
    </div>
  </div>
)

const ListView = ({ projects }) => {
  const groupedProjects = groupBy(projects.filter(project => project.status !== 'completed'), 'neighborhood')
  return (
    <div>
      <h4>Neighborhoods:</h4>
      <ul className="nav">
        {Object.keys(groupedProjects).map(neighborhood => (
          <li className="nav-item" key={neighborhood}>
            <a className="nav-link" href={`#${kebabCase(neighborhood)}`}>{neighborhood}</a>
          </li>
        ))}
      </ul>
      <div className="project-list">
      {Object.keys(groupedProjects).map(neighborhood => (
        <div key={neighborhood}>
          <h4 className="my-4 text-info" id={kebabCase(neighborhood)}>{neighborhood}</h4>
          {groupedProjects[neighborhood].map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      ))}
      </div>
    </div>
  )
}

export default ListView;
