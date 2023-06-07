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
      />
      <select
        name="opportunityType"
        value={filterData.opportunityType}
        onChange={handleFilterChange}
      >
        <option value="">Opportunity Type</option>
        <option value="volunteering">Volunteering</option>
        <option value="internship">Internship</option>
      </select>
      <select
        name="locationType"
        value={filterData.locationType}
        onChange={handleFilterChange}
      >
        <option value="">Location Type</option>
        <option value="remote">Remote</option>
        <option value="in-person">In-person</option>
      </select>
      <button className="apply-filter-button" onClick={toggleFilterPopup}>
        Apply Filters
      </button>
    </div>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filterData, setFilterData] = useState({
    zipcode: '',
    opportunityType: '',
    locationType: '',
  });

  const handleSearch = () => {
    const searchObject = {
      query: searchQuery,
      filters: { ...filterData },
    };

    // Convert search object to JSON string
    const searchJsonString = JSON.stringify(searchObject);

    // Define the backend API endpoint URL
    const apiUrl = 'https://your-backend-api.com/search';

    // Make the API call to the backend
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: searchJsonString,
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data from the backend
        console.log(data);
        // Perform further actions with the data returned from the backend
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error('Error:', error);
      });
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
      {showFilterPopup && (
        <FilterFields
          filterData={filterData}
          handleFilterChange={handleFilterChange}
          toggleFilterPopup={toggleFilterPopup}
        />
      )}
    </div>
  );
};

export default SearchBar;
