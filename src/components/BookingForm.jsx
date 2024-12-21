"use client"

import React, { useState, useEffect } from 'react';

export default function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});
  const [submitAttempts, setSubmitAttempts] = useState(0);

  useEffect(() => {
    const newErrors = {};
    if (!date) newErrors.date = "Please select a date";
    if (!time) newErrors.time = "Please select a time";
    if (!guests) newErrors.guests = "Please select number of guests";
    if (!occasion) newErrors.occasion = "Please select an occasion";
    setErrors(newErrors);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempts(prev => prev + 1);
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', { date, time, guests, occasion });
      // Add your submission logic here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="mb-4">
        <label className="block mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`w-full p-2 border rounded ${errors.date && submitAttempts > 0 ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.date && submitAttempts > 0 && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Time</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={`w-full p-2 border rounded ${errors.time && submitAttempts > 0 ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select a time</option>
          <option value="17:00">5:00 PM</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="21:00">9:00 PM</option>
        </select>
        {errors.time && submitAttempts > 0 && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Number of guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className={`w-full p-2 border rounded ${errors.guests && submitAttempts > 0 ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select number of guests</option>
          {[1,2,3,4,5,6,7,8,9,10].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        {errors.guests && submitAttempts > 0 && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Occasion</label>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className={`w-full p-2 border rounded ${errors.occasion && submitAttempts > 0 ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Date">Date</option>
          <option value="Special Occasion">Special Occasion</option>
        </select>
        {errors.occasion && submitAttempts > 0 && <p className="text-red-500 text-sm mt-1">{errors.occasion}</p>}
      </div>

      <button 
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

