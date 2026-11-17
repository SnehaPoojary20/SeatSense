import "./Passengers.css";


function PassengerCountSelector({ count, onChange }){

    return(
        <div className="passenger-count-card">
      <div className="count-label">
        <span className="icon">👥</span>

        <div>
          <h4>Number of Passengers</h4>
          <p>Select total travelers (1-6)</p>
        </div>
        </div>
        
      <div className="counter-controls">
        <button 
          className="counter-btn" 
          disabled={count <= 1} 
          onClick={() => onChange(count - 1)}
        >
          -
        </button>
        <span className="count-value">{count}</span>
        <button 
          className="counter-btn" 
          disabled={count >= 6} 
          onChange={() => {}}
          onClick={() => onChange(count + 1)}
        >
          +
        </button>
      </div>
    </div>
    );
}


export default PassengerCountSelector;