import React, { useState } from "react";

export default function Tour({ val, handleDelete }) {
  const [more, setMore] = useState("");

  return (
    <div className="tour_container">
      <div className="box">
        <p>Name</p>
        <span>{val.name}</span>
      </div>
      <div className="box">
        <p>Info</p>
        <span>
          {more === val.id ? val.info : val.info.slice(0, 200)}
          {more === val.id ? (
            <spna
              onClick={() => setMore("")}
              style={{ color: "blue", cursor: "pointer" }}
            >
              show less
            </spna>
          ) : (
            <spna
              onClick={() => setMore(val.id)}
              style={{ color: "red", cursor: "pointer" }}
            >
              show more
            </spna>
          )}{" "}
        </span>
      </div>
      <div className="box">
        <p>Price</p>
        <span>₹ {val.price} </span>
      </div>
      <div>
        <button onClick={() => handleDelete(val.id)}>Delete</button>
      </div>
    </div>
  );
}
