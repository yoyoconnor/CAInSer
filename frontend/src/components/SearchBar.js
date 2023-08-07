import React, { useState } from 'react';
import './SearchBar.css';

const FilterFields = ({ filterData, handleFilterChange, toggleFilterPopup }) => {
  return (
    <div className="filter-fields">
      <input
        type="text"
        name="zipcode"
        placeholder="Zip Code"
        value={filterData.zipcode}
        onChange={handleFilterChange}
        className='zipcode-input FilterFields3'
        size={10}
      />
      <select
        name="opportunityType"
        value={filterData.opportunityType}
        onChange={handleFilterChange}
        className='FilterFields'
      >
        <option value="">Type</option>
        <option value="v">Volunteering</option>
        <option value="i">Internship</option>
      </select>
      <select
        name="locationType"
        value={filterData.locationType}
        onChange={handleFilterChange}
        className='FilterFields'
      >
        <option value="">Location Type</option>
        <option value="r">Remote</option>
        <option value="i">In-person</option>
      </select>
      <button className="apply-filter-button" onClick={toggleFilterPopup} >
        Apply
      </button>
    </div>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filterData, setFilterData] = useState({
    zipcode: '',
    Type: '',
    locationType: '',
  });
  const handleSearch = () => {
    const searchObject = {
      query: searchQuery,
      location: filterData.locationType,
      type: filterData.opportunityType,
    };

    // Convert search object to JSON string
    console.log(searchObject);
    fetchData(searchObject);
    // Make the API call to the backend
    
  };
  const fetchData = async (searchObject) => {
    try {
      console.log(`localhost:8080/internship/?query=${searchObject.query}&location=${searchObject.location}&type=${searchObject.type}`);
      const response = await fetch(`localhost:8080/internship/query=${searchObject.query}&location=${searchObject.location}&type=${searchObject.type}`);
      const data = await response.json();
      // Process the received data
      console.log(data);
      // Update the state or UI with the search results
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
    }
  };


  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleFilterPopup = () => {
    setShowFilterPopup((prevValue) => !prevValue);
  };

  return (
    <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchQuery}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <span className="search-icon">&#128269;</span>
      </button>
      <button className="filter-button" onClick={toggleFilterPopup}>
        Filter
      </button>
    </div>
    <div className="filter-bar">
    {showFilterPopup && (
      <FilterFields
        filterData={filterData}
        handleFilterChange={handleFilterChange}
        toggleFilterPopup={toggleFilterPopup}
      />
    )}
    </div>
    </>
  );
};

export default SearchBar;
