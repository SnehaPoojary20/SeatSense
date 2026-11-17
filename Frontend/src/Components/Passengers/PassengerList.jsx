import PassengerCard from './PassengerCard';
import './Passengers.css';

function PassengerList({ passengers, activeId, onSelectPassenger }) {
  return (
    <div className="passenger-list-container">
      <h3>Passenger Seat Assignments</h3>
      <p className="subtitle">Click a passenger card to assign or change their seat.</p>
      <div className="passenger-cards-grid">
        {passengers.map(passenger => (
          <PassengerCard
            key={passenger.id}
            passenger={passenger}
            isActive={passenger.id === activeId}
            onSelect={() => onSelectPassenger(passenger.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PassengerList;