import React from 'react'

function Search() {
  return (
    <div className="container">
      <div className="box">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          id="input4"
          placeholder="Search"
          className="search-input"
        />
      </div>
    </div>
  )
}

export default Search