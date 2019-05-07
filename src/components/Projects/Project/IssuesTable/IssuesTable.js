import React from 'react';

const IssuesTable = ({issuesList}) => (
  <table className="issues-table">
      <thead>
      <tr>
          <th>Subjects</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Tracker</th>
          <th>Author</th>
      </tr>
      </thead>
      <tbody>
      {issuesList.map(item => (
          <tr key={item.subject}>
              <td>{item.subject}</td>
              <td>{item.status.name}</td>
              <td>{item.priority.name}</td>
              <td>{item.tracker.name}</td>
              <td>{item.author.name}</td>
          </tr>
      ))}
      </tbody>
  </table>
);

export default IssuesTable;