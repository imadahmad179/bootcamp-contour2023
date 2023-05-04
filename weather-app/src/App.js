import React, { useState, useEffect } from 'react';

function DropdownPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countries, setCountries] = useState([
    { country: 'Pakistan' },
    { country: 'India' },
    { country: 'Turkey' },
  ]);
  const [cities, setCities] = useState([]);

  const handleSelectCountry = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    fetchCities(country);
  };

  const handleSelectCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const fetchCities = (country) => {
    let cities = [];
    switch (country) {
      case 'Pakistan':
        cities = ['Karachi', 'Lahore', 'Peshawar'];
        break;
      case 'India':
        cities = ['Delhi', 'Kolkata', 'Mumbai'];
        break;
      case 'Turkey':
        cities = ['Istanbul', 'Ankara', 'Antalya'];
        break;
      default:
        cities = [];
    }
    setCities(cities);
  };

  return (
    <div>
    
      <h1>Dropdown Page</h1>
      <div classs="components">
      <label>
        Select a country:
        <select value={selectedCountry} onChange={handleSelectCountry}>
          <option value=''>Select a country</option>
          {countries.map((country) => (
            <option key={country.country} value={country.country}>
              {country.country}
            </option>
            <div style={components}>
              
            </div>

          ))}
        </select>
      </label>
      <br />
      </div>
      <label>
        Select a city:
        <select value={selectedCity} onChange={handleSelectCity}>
          <option value=''>Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default DropdownPage;
