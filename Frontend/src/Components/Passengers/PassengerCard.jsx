import './Passengers.css';

function PassengerCard({ passenger, isActive, onSelect }) {
  return (
    <div 
      className={`passenger-card ${isActive ? 'active' : ''}`}
      onClick={onSelect}
    >
      <div className="card-header">
        <span className="passenger-avatar">👤</span>
        <span className="passenger-title">{passenger.name}</span>
      </div>
      <div className="card-body">
        <div className="assignment-info">
          <span className="label">Seat:</span>
          <span className={`value ${passenger.seat ? 'assigned' : 'unassigned'}`}>
            {passenger.seat ? passenger.seat.id : 'Not Selected'}
          </span>
        </div>
        {passenger.seat && (
          <div className="seat-meta">
            <span>{passenger.seat.category}</span>
            <span className="price">₹{passenger.seat.price}</span>
          </div>
        )}
      </div>
    </div>
  );
}


export default PassengerCard;