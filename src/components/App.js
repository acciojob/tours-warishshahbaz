"use strict";
import React, { useState, useEffect } from "react";

import Loading from "./loading";
import Tours from "./Tours";
require("babel-core/register");
require("babel-polyfill");

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);

      const toursFetched = await response.json();
      setTours(toursFetched);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main id="main">
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
