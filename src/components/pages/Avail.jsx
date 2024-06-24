import React from "react";
import { desk } from "../../data";
import { Link } from "react-router-dom";

const Avail = () => {
  return (
    <div className="desk padding">
      <h3>Available Desk</h3>

      <div className="desk-table">
        {desk.map((item) => (
          <div className="card" key={item.id}>
                <h4>Category: {item.type}</h4>
                <p>{item.book === false ? "Still Available" : "Booked" }</p>
            <Link to={`/booking/${item.id}`} className="cardBtn">
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avail;
