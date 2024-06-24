import React from "react";

const DeskList = ({ desks }) => {
  return (
    <div>
      <h3>Available Desks</h3>
      <ul>
        {desks.map((desk, index) => (
          <li key={index}>
            {desk.type === "individual" ? "Individual Desk" : "Team Desk"} -{" "}
            {desk.booked ? "Booked" : "Available"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeskList;
