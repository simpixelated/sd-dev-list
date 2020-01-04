import React from 'react';
import groupBy from 'lodash/groupBy';
import kebabCase from 'lodash/kebabCase';
import projects from './projects.json';
import packageInfo from '../package.json';

const ProjectCard = ({ project }) => (
  <div className="card mb-2">
    <div className="card-body">
      <h5 className="card-title">{project.title || `${project.neighborhood} ${project.type}`}</h5>
      {project.neighborhood && <h6 className="card-subtitle mb-2 text-muted">{project.neighborhood}</h6>}
      {project.location && <p className="card-subtitle mb-2 text-muted"><small>{project.location}</small></p>}
      {project.description && <p className="card-text">{project.description}</p>}
      {(project.events || []).length > 0 &&
        <dl>
          {project.events.sort((a, b) => Object.values(a)[0] - Object.values(b)[0]).map(event => (
            <React.Fragment key={Object.keys(event)[0]}>
              <dt>{Object.keys(event)[0]}</dt>
              <dd>{Object.values(event)[0]}</dd>
            </React.Fragment>
          ))}
        </dl >
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

function App() {
  const groupedProjects = groupBy(projects.filter(project => project.status !== 'completed'), 'neighborhood')
  return (
    <div className="container">
      <div className="float-right"><small><a href="https://github.com/simpixelated/sd-dev-list">View on GitHub</a></small></div>
      <h1 className="mt-4">SD Dev List</h1>
      <p>Major development projects in planning or under construction in San Diego (mostly downtown)</p>

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
      <hr />
      <p>More resources:</p>
      <ul>
        <li><a href="https://www.skyscrapercenter.com/compare-data/submit?type%5B%5D=building&status%5B%5D=COM&status%5B%5D=UC&status%5B%5D=UCT&status%5B%5D=STO&status%5B%5D=PRO&base_region=0&base_country=0&base_city=1677&base_height_range=0&base_company=All&base_min_year=2017&base_max_year=9999&comp_region=0&comp_country=0&comp_city=0&comp_height_range=4&comp_company=All&comp_min_year=1960&comp_max_year=2021&skip_comparison=on&output%5B%5D=list&dataSubmit=Show+Results">The Skyscraper Center</a></li>
        <li><a href="https://coolsandiegosights.com/">Cool San Diego Sights</a></li>
        <li><a href="https://twitter.com/i/lists/778983544047538176?s=20">San Diego Urbanists Twitter List</a></li>
        <li><a href="https://www.instagram.com/realportfolio/?hl=en">San Diego Crane Watch Instagram</a></li>
      </ul>
      <p className="text-right"><small>Built by <a href="https://simpixelated.com">Simpixelated</a>, inspired by <a href="https://sandiego.urbdezine.com/development-map/">San Diego UrbDeZine</a>. Version {packageInfo.version} (<a href="https://github.com/simpixelated/sd-dev-list/blob/master/CHANGELOG.md">changelog</a>)</small></p>
    </div>
  );
}

export default App;
