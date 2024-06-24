import React, { useState, useEffect } from "react";
import { desk } from "../../data";

const Booking = ({ desks, onBook }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("individual");
  const [membership, setMembership] = useState("");
  const [hours, setHours] = useState(1);

  useEffect(() => {
    // Fetch blog data based on the ID when the component mounts
    fetch(`http://localhost:8000/${desk}/`)
      .then((response) => response.json())
      .then((data) => {
        setType(data.image);
        setMembership(data.title);
        setHours(data.body);
        data.author;
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        // Handle error - Redirect or show an error message to the user
      });
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    const costPerHour =
      membership === "Basic" ? 10 : membership === "Premium" ? 15 : 20;
    const totalCost = type === "individual" ? costPerHour * hours : 0;

    onBook({ name, type, membership, hours, totalCost });

    //  const updatedBlog = { title, body, author, date };

    setIsPending(true);

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
      // body: updatedBlog,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        alert("Blog Updated Successfully!");
        setIsPending(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setIsPending(false);
        // Handle error - Show user an error message
      });
  };

  return (
    <div className="booking">
      <form className="bookingForm">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Desk Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="individual">Individual</option>
            <option value="team">Team</option>
          </select>
        </div>
        {type === "individual" ? (
          <div className="input-group">
            <label>Membership:</label>
            <select
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
            >
              <option value="Basic">Basic - $10/hour</option>
              <option value="Premium">Premium - $15/hour</option>
              <option value="Executive">Executive - $20/hour</option>
            </select>
          </div>
        ) : (
          <div className="input-group">
            <label>Fixed Price:</label>
            <input type="number" value="25" placeholder="#25" disabled />
          </div>
        )}
        <div className="input-group">
          <label>Hours:</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            min="1"
            required
          />
        </div>
        {hours >= 3 && (
          <div className="textcenter">
            <p>You are getting a 10% discount for Booking up to 3 hours</p>
          </div>
        )}
        <button type="submit" onClick={handleBook}>
          Book Desk
        </button>
      </form>
    </div>
  );
};

export default Booking;
