import './guestList.css';
import React, { useState } from 'react';

function GuestList() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');

  const handleAttending = (id) => {
    alert('hello');
  };

  const addGuest = () => {
    // this add guest to the end of guestList array
    // const newArray = [...oldArray , newItem]
    // const newGuest = { fn: firstName, ln: lastName, date: date };
    const newGuest = {
      id: firstName + lastName,
      firstName,
      lastName,
      date,
      isAttended: 'No',
    };
    setGuestList([...guestList, newGuest]);
  };

  const removeGuest = (id) => {
    // HOW TO remove one item from an array
    setGuestList(guestList.filter((guest) => guest.id !== id));
  };

  // const handleFirstName = (e) => {
  //   setFirstName(e.target.value);
  // };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="container">
      {guestList !== [] ? (
        <ul>
          {guestList.map((guest) => (
            <li>
              {guest.firstName} {guest.lastName}{' '}
              <span className="date">{guest.date}</span>
              {guest.isAttended}
              <button
                className="button"
                onClick={() => removeGuest(guest.id)} // you should write array function here
              >
                Remove
              </button>
              <button
                className="button"
                onClick={() => handleAttending(guest.id)}
              >
                Attending
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <div>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          // version 1
          type="text"
          placeholder="First Name"
          name="value"
        />
        <input
          onChange={(e) => handleLastName(e)} // version 2
          type="text"
          placeholder="Last Name"
          name="value"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          type="datetime-local"
          name="deadline"
        />
      </div>
      <button className="button" onClick={addGuest}>
        Add to List
      </button>
    </div>
  );
}

export default GuestList;
