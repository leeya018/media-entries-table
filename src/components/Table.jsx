import React from "react";
export default function Table({ list }) {
  function getImageStyle(thumbnailUrl) {
    return {
      background: `url(${thumbnailUrl})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: "100px",
      height: "100px",
      backgroundPosition: "center",
    };
  }
  return (
    <div className="table-view">
      <div className="table-container">
        <h1>Content</h1>
        <table>
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Name</th>
              <th>Entry id</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="img" style={getImageStyle(item.thumbnailUrl)}></div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.duration}</td>
                  <td>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
{
}
