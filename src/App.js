import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="timer">
        <span></span>
      </div>
      <div className="gameover">GAME OVER</div>
      <h1>KILL THE BIRDS <span>(shoot the birds)</span></h1>
      <h2>PURE CSS GAME - NO JS!</h2>

      {[1, 2, 3, 4, 5, 6].map(i => (
        <input key={`circle${i}`} className={`input-circle input-circle${i}`} type="radio" id={`circle${i}`} />
      ))}

      {[1, 2, 3, 4, 5, 6].map(i => (
        <label key={`pajaro${i}`} htmlFor={`circle${i}`} className={`pajaro pajaro${i}`}>
          <span></span>
        </label>
      ))}

      <div className="sum">SCORE:</div>
    </div>
  );
}

export default App;
