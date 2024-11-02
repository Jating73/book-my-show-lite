// SeatSelection.js
import React, { useState } from 'react';
import moviesData from '../data/movies.json';
import './SeatSelection.css';

const SeatSelection = ({ movieId }) => {
  const movie = moviesData.find(movie => movie.id === movieId);

  const availableSchedules = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'];

  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [showSeatLayout, setShowSeatLayout] = useState(false);

  // Rows from A to I
  const rows = 'ABCDEFGHI'.split('');
  const columnsPerGroup = 4;
  const numberOfGroups = 3;

  // Generate the seats only once using useState
  const [seats] = useState(() =>
    rows.flatMap((row) =>
      Array.from({ length: columnsPerGroup * numberOfGroups }, (_, index) => ({
        id: `${row}${index + 1}`,
        occupied: Math.random() > 0.7, // Randomly mark some seats as occupied
      }))
    )
  );

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  if (!movie) return <div>Movie not found!</div>;

  const handleScheduleSelection = (schedule) => {
    setSelectedSchedule(schedule);
    setShowSeatLayout(true); // Show the seat layout after selecting a schedule
  };

  return (
    <div className="seat-selection">
      <h1>Select Seats for {movie.title}</h1>
      {!showSeatLayout ? (
        <>
          <h2>Choose a time schedule</h2>
          <div className="schedule-list">
            {availableSchedules.map(schedule => (
              <button
                key={schedule}
                className={`schedule-btn ${selectedSchedule === schedule ? 'selected' : ''}`}
                onClick={() => handleScheduleSelection(schedule)}
              >
                {schedule}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Selected Schedule: {selectedSchedule}</h2>
          <div className="seat-layout">
            {rows.map((row) => (
              <div key={row} className="seat-row">
                <span className="row-label">{row}</span>
                {Array.from({ length: numberOfGroups }, (_, groupIndex) => (
                  <div key={groupIndex} className="seat-group">
                    {Array.from({ length: columnsPerGroup }, (_, colIndex) => {
                      const seatNumber = groupIndex * columnsPerGroup + colIndex + 1;
                      const seatId = `${row}${seatNumber}`;
                      const seat = seats.find(s => s.id === seatId);

                      return (
                        <div
                          key={seatId}
                          className={`seat ${seat.occupied ? 'occupied' : ''} ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
                          onClick={() => !seat.occupied && toggleSeatSelection(seatId)}
                        >
                          {seatNumber}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <h2>Selected Seats: {selectedSeats.join(', ')}</h2>
          <button className="book-now" onClick={() => alert(`Booking seats: ${selectedSeats.join(', ')}`)}>
            Book Now
          </button>
        </>
      )}
    </div>
  );
};

export default SeatSelection;
