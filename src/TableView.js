import React from 'react';

const TableView = ({ projects }) => {
  return (
    <table className="table table-hover">
      <thead className="thead-light">
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Status</th>
          <th>Neighborhood</th>
          <th>Groundbreaking</th>
          <th>Completion</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td>{project.title || project.location || `${project.neighborhood} ${project.type}`}</td>
            <td>{project.type}</td>
            <td>{project.status}</td>
            <td>{project.neighborhood}</td>
            <td>{project.start}</td>
            <td>{project.end}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableView;
