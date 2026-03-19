import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mentors, timeSlots } from '../data/mockData';
import './Booking.css';

export default function Booking() {
  const { mentorId } = useParams();
  const mentor = mentors.find(m => m.id === Number(mentorId)) || mentors[0];

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('call');

  const sessionTypes = [
    { id: 'call', label: '1-on-1 Call', icon: '📞', price: 75 },
    { id: 'chat', label: 'Chat Session', icon: '💬', price: 40 },
    { id: 'review', label: 'Code Review', icon: '📝', price: 60 },
  ];

  const currentSession = sessionTypes.find(s => s.id === sessionType);

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const handleBooking = () => {
    alert(`Booking confirmed! (Demo)\n\nMentor: ${mentor.name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nType: ${currentSession.label}`);
  };

  return (
    <div className="booking-page">
      <div className="container">
        <div className="booking-header">
          <h1>Book a Session with <span className="gradient-text">{mentor.name}</span></h1>
          <p>Choose your preferred date, time, and session type</p>
        </div>

        <div className="booking-grid">
          {/* Left - Selection */}
          <div className="booking-form">
            {/* Mentor Mini Card */}
            <div className="booking-mentor glass-card">
              <img src={mentor.avatar} alt={mentor.name} className="avatar avatar-lg" />
              <div>
                <h3>{mentor.name}</h3>
                <p>{mentor.title} at {mentor.company}</p>
                <div className="booking-mentor-rating">
                  <span className="star">★</span> {mentor.rating} ({mentor.reviews} reviews)
                </div>
              </div>
            </div>

            {/* Session Type */}
            <div className="booking-section glass-card">
              <h2>Session Type</h2>
              <div className="session-type-grid">
                {sessionTypes.map(type => (
                  <button
                    key={type.id}
                    className={`session-type-card ${sessionType === type.id ? 'active' : ''}`}
                    onClick={() => setSessionType(type.id)}
                  >
                    <span className="type-icon">{type.icon}</span>
                    <span className="type-label">{type.label}</span>
                    <span className="type-price">${type.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="booking-section glass-card">
              <h2>Select Date</h2>
              <div className="date-grid">
                {dates.map(date => {
                  const dateStr = date.toISOString().split('T')[0];
                  const dayName = date.toLocaleDateString('en', { weekday: 'short' });
                  const dayNum = date.getDate();
                  const month = date.toLocaleDateString('en', { month: 'short' });
                  return (
                    <button
                      key={dateStr}
                      className={`date-card ${selectedDate === dateStr ? 'active' : ''}`}
                      onClick={() => setSelectedDate(dateStr)}
                    >
                      <span className="date-day">{dayName}</span>
                      <span className="date-num">{dayNum}</span>
                      <span className="date-month">{month}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div className="booking-section glass-card">
              <h2>Select Time</h2>
              <div className="time-grid">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'active' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Summary */}
          <div className="booking-summary">
            <div className="summary-card glass-card">
              <h2>Booking Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Session Type</span>
                  <span>{currentSession.icon} {currentSession.label}</span>
                </div>
                <div className="summary-row">
                  <span>Date</span>
                  <span>{selectedDate || '—'}</span>
                </div>
                <div className="summary-row">
                  <span>Time</span>
                  <span>{selectedTime || '—'}</span>
                </div>
                <div className="summary-row">
                  <span>Duration</span>
                  <span>45 minutes</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span className="summary-total">${currentSession.price}</span>
                </div>
              </div>

              <button
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: 'var(--space-lg)' }}
                disabled={!selectedDate || !selectedTime}
                onClick={handleBooking}
              >
                Confirm Booking
              </button>

              <div className="summary-guarantee">
                <p>🔒 Secure payment</p>
                <p>💰 Money-back guarantee</p>
                <p>❌ Free cancellation 24h before</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
