import React from "react";

const Filter = ({ onSearch, searchValue, sortValue, onSort }) => {
  //search and sort
  function handleSearchChange(event) {
    onSearch(event.target.value);
  }

  function handleSort(event) {
    onSort(event.target.value);
  }

  return (
    <div>
      <label>Search: </label>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
      <select name="sort" value={sortValue} onChange={handleSort}>
        <option value="Ascend">Ascend</option>
        <option value="Descend">Descend</option>
        <option value="New">New</option>
      </select>
    </div>
  );
};

export default Filter;
