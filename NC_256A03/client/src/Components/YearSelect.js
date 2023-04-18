import React, { useState } from "react";

const YearSelect = ({ onYearSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onYearSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search by year:
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

export default YearSelect;
