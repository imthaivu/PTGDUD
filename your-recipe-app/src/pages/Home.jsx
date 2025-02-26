import React from "react";
import FilterBar from "../components/FilterBar";
import NoResults from "./NoResults";

function Home() {
  return (
    <main className="home">
      <div className="left">
        <FilterBar />
      </div>
      <div className="right">
        <NoResults />
      </div>
    </main>
  );
}

export default Home;
