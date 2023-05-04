import React, { useState, useEffect } from 'react';
import './App.css'
// import './index.css'

function UserManagementForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
  });
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddUser = () => {
    setUsers([...users, formData]);
    setFormData({
      name: '',
      address: '',
      city: '',
    });
  };

  const handleEditUser = (index) => {
    setEditIndex(index);
    setFormData(users[index]);
  };

  const handleSaveUser = () => {
    const newUsers = [...users];
    newUsers[editIndex] = formData;
    setUsers(newUsers);
    setEditIndex(-1);
    setFormData({
      name: '',
      address: '',
      city: '',
    });
  };

  const handleDeleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
 
    <><div className='col-md-6' style={{marginLeft:"40%", marginTop:"10%"}}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange} />
      <br></br>

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange} />
      <br></br>

      <label htmlFor="city">City:</label>
      <select id="city" name="city" value={formData.city} onChange={handleInputChange}>
        <option value="">--Please select a city--</option>
        <option value="Karachi">Karachi</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Kohat">Kohat</option>
        <option value="Peshawar">Peshawar</option>
        <option value="Multan">Multan</option>
        <option value="Faisalabad">Faisalabad</option>
        <option value="Abbottabad">Abbottabad</option>
        <option value="Kashmir">Kashmir</option>
        <option value="Haripur">Haripur</option>
      </select>

      <br></br>
      {editIndex === -1 ? (
        <button className='btn btn-primary' type="button" onClick={handleAddUser}>Add User</button>
      ) : (
        <div>
          <button className='btn btn-secondary' type="button" onClick={handleSaveUser}>Save User</button>
          <button className='btn btn-danger' type="button" onClick={() => setEditIndex(-1)}>Cancel</button>

        </div>

      )}
    </div><div className='col-md-6' style={{marginLeft:"40%"}}>
        
    <br></br>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" value={searchTerm} onChange={handleSearchTermChange} />
          {filteredUsers.map((user, index) => (
            <li key={index}>
              {user.name}, {user.address}, {user.city}
              <button className='btn btn-info' type="button" onClick={() => handleEditUser(index)}>Edit</button>
              <span> </span>
              <button className='btn btn-danger' type="button" onClick={() => handleDeleteUser(index)}>Delete</button>
            </li>
          ))}
      </div></>
  
  )
        }
        export default UserManagementForm
