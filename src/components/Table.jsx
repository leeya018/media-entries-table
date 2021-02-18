import React from "react";
import "../index.css";

export default function Table() {
  let list = [
    {
      thumbnail: "jkl",
      name: "321",
      entryId: "jk43l",
      duration: "55",
      actions: "66",
    },
    {
        thumbnail: "asd",
        name: "321",
        entryId: "jk43l",
        duration: "55",
        actions: "66",
      },
  ];
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
