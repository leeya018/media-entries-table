import React from "react";


export default function Table({list}) {

  return (
    <div className="table-view">
      <div className="table-container">
      <h1>Content</h1>
        <table>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Entry id</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
          {list.map((item) => {
            return (
              <tr>
                <td>{item.thumbnail}</td>
                <td>{item.name}</td>
                <td>{item.entryId}</td>
                <td>{item.duration}</td>
                <td>{item.actions}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
