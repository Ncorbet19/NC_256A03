import React, { useState } from "react";

const ActorSelect = ({ onActorSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onActorSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search by actor:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default ActorSelect;
