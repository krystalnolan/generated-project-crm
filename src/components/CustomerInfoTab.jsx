import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerInfoTab() {
  const [prefix, setPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneType, setPhoneType] = useState('Mobile');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Dummy search results
    const dummyResults = [
      { id: 1, email: 'test@example.com', firstName: 'Test', lastName: 'User' },
      { id: 2, email: 'test2@example.com', firstName: 'Test2', lastName: 'User2' },
    ];
    setSearchResults(dummyResults.filter(result => result.email.includes(email)));
  };

  const handleSave = () => {
    // Save logic here
    alert('Customer information saved!');
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPrefix('');
    setFirstName('');
    setLastName('');
    setPhoneType('Mobile');
    setCountryCode('');
    setPhoneNumber('');
    setStreet1('');
    setStreet2('');
    setSuburb('');
    setState('');
    setPostcode('');
    setCountry('');
  };

  const handleResultClick = (result) => {
    navigate('/customer-profile', { state: { customer: result } });
  };

  return (
    <div className="customer-info-tab">
      <h2>Customer Information</h2>
      <div className="search-section">
        <input
          type="email"
          placeholder="Search by email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {searchResults.length > 0 && (
          <div className="search-results">
            <h3>Search Results:</h3>
            <ul>
              {searchResults.map(result => (
                <li key={result.id} onClick={() => handleResultClick(result)}>
                  {result.firstName} {result.lastName} ({result.email})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="form-section">
        <h3>Create/Update Customer</h3>
        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Prefix:</label>
        <input
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
        />

        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Phone Type:</label>
        <select value={phoneType} onChange={(e) => setPhoneType(e.target.value)}>
          <option>Mobile</option>
          <option>Home</option>
          <option>Work</option>
        </select>

        <label>Country Code:</label>
        <input
          type="text"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        />

        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            const value = e.target.value;
            if (/^[0-9\s]*$/.test(value)) {
              setPhoneNumber(value);
            }
          }}
        />

        <label>Street 1:</label>
        <input
          type="text"
          value={street1}
          onChange={(e) => setStreet1(e.target.value)}
        />

        <label>Street 2:</label>
        <input
          type="text"
          value={street2}
          onChange={(e) => setStreet2(e.target.value)}
        />

        <label>Suburb:</label>
        <input
          type="text"
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
        />

        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <label>Postcode:</label>
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />

        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default CustomerInfoTab;
