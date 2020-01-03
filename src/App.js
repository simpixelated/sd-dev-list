import React from 'react';
import groupBy from 'lodash/groupBy';
import kebabCase from 'lodash/kebabCase';
import projects from './projects.json';

function App() {
  const groupedProjects = groupBy(projects, 'neighborhood')
  return (
    <div className="container">
      <ul className="nav">
        {Object.keys(groupedProjects).map(neighborhood => (
          <li className="nav-item" key={neighborhood}>
            <a className="nav-link" href={`#${kebabCase(neighborhood)}`}>{neighborhood}</a>
          </li>
        ))}
      </ul>
      <div className="project-list">
      {Object.keys(groupedProjects).map(neighborhood => (
        <div>
          <h4 className="my-4" id={kebabCase(neighborhood)}>{neighborhood}</h4>
          {groupedProjects[neighborhood].map((project, index) => (
            <div className="card mb-2" key={index}>
              <div className="card-body">
                <h5 className="card-title">{project.title || `${project.neighborhood} ${project.type}`}</h5>
                {project.neighborhood && <h6 className="card-subtitle mb-2 text-muted">{project.neighborhood}</h6>}
                {project.description && <p className="card-text">{project.description}</p>}
                {project.address && <a className="card-link" href={`https://www.google.com/maps/place/${project.address}`}>Map</a>}
                {project.links &&
                  <ul>
                    {project.links.map(link => (
                      <li key={link}>
                        <a href={link}>{link}</a>
                      </li>
                    ))}
                  </ul>
                }
              </div>
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
