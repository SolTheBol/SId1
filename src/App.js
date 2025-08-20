// import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [clicks, setClicks] = useState(0);
//   const [showBonusButton, setShowBonusButton] = useState(false);
//   const [showMusicButton, setShowMusicButton] = useState(false);
//   const [bonusActivated, setBonusActivated] = useState(false);
//   const [showCpsButton, setShowCpsButton] = useState(false);
//   const [bgColor, setBgColor] = useState('#ffffff');
//   const [musicActivated, setMusicActivated] = useState(false);
//   const [cps, setCps] = useState(0);
//   const [cpsUnlocked, setCpsUnlocked] = useState(false);
//   const [stairs, setStairs] = useState(0);
//   const [stairPrice, setStairPrice] = useState(150);
//   const [floors, setFloors] = useState(0);
//   const [showFloorButton, setShowFloorButton] = useState(false);

//   const audioRef = useRef(new Audio('/where-are-the-larks-12568.mp3'));

//   const tracks = [
//     '/celestial_choirs.mp3',
//     '/celestial_calm.mp3',
//     '/soothing_celestial.mp3',
//     '/dreamy_loop.mp3'
//   ];

//   audioRef.current.loop = true;

//   const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const handleMainClick = () => {
//     const increment = bonusActivated ? 2 : 1;
//     const newClickCount = clicks + increment + stairs;
//     setClicks(newClickCount);

//     if (!showBonusButton && newClickCount >= 10 && !bonusActivated) {
//       setShowBonusButton(true);
//     }

//     if (bonusActivated) {
//       setBgColor(getRandomColor());
//     }

//     if (!showMusicButton && newClickCount >= 50 && !musicActivated) {
//       setShowMusicButton(true);
//     }

//     if (!showCpsButton && newClickCount >= 100) {
//       setShowCpsButton(true);
//     }

//     if (!showFloorButton && newClickCount >= 250) {
//       setShowFloorButton(true);
//     }
//   };

//   const handleBonusClick = () => {
//     if (clicks >= 10) {
//       setClicks((prev) => prev - 10);
//       setShowBonusButton(false);
//       setBonusActivated(true);
//     }
//   };

//   const handleMusicClick = () => {
//     const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//     audioRef.current = new Audio(randomTrack);
//     audioRef.current.loop = true;
//     audioRef.current.play().catch(() => {}); // fix glitch on rapid clicks
//     setMusicActivated(true);
//     setShowMusicButton(false);
//     setCps((prev) => prev + 3);
//   };

//   const handleCpsClick = () => {
//     setShowCpsButton(false);
//     setCpsUnlocked(true);
//   };

//   const handleStairClick = () => {
//     if (clicks >= stairPrice) {
//       setClicks((prev) => prev - stairPrice);
//       setStairs((prev) => prev + 1);
//       setStairPrice(Math.floor(stairPrice * 1.25));
//     }
//   };

//   const handleFloorClick = () => {
//     if (clicks >= 500) {
//       setClicks((prev) => prev - 500);
//       setFloors((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if ([" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
//         e.preventDefault();
//         handleMainClick();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [clicks, bonusActivated, stairs]);

//   useEffect(() => {
//     let interval;
//     if (cps > 0 || stairs > 0) {
//       interval = setInterval(() => {
//         setClicks((prev) => prev + cps + stairs);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [cps, stairs]);

//   return (
//     <div className="app" style={{ backgroundColor: bgColor, position: 'relative', height: '100vh' }}>
//       <div className="game-container">
//         <h1>Click Count: {clicks}</h1>
//         <button className="main-button" onClick={handleMainClick}>
//           Click Me!
//         </button>

//         {showBonusButton && (
//           <button className="bonus-button" onClick={handleBonusClick}>
//             Unlock Color Change (-10 clicks)
//           </button>
//         )}
//         {showMusicButton && (
//           <button className="music-button" onClick={handleMusicClick}>
//             Unlock Background Music
//           </button>
//         )}
//         {showCpsButton && !cpsUnlocked && (
//           <button className="cps-button" onClick={handleCpsClick}>
//             Unlock CPS Counter
//           </button>
//         )}
//         {cpsUnlocked && <h2>CPS: {cps + stairs}</h2>}

//         {clicks >= 150 && (
//           <button className="stair-button" onClick={handleStairClick}>
//             Buy Stair ({stairPrice} clicks)
//           </button>
//         )}

//         {showFloorButton && (
//           <button className="floor-button" onClick={handleFloorClick}>
//             Buy Floor (500 clicks)
//           </button>
//         )}
//       </div>

//       {/* Render Floors */}
//       {Array.from({ length: floors }).map((_, i) => (
//         <div
//           key={i}
//           style={{
//             position: 'absolute',
//             bottom: `${i * 20}%`,
//             left: 0,
//             width: '100%',
//             height: '20%',
//             background: 'linear-gradient(to top, #3e2f1c 70%, #4caf50 30%)',
//             borderTop: '4px solid #2e7d32',
//             zIndex: -1
//           }}
//         />
//       ))}

//       {/* Snow Effect */}
//       {floors > 0 && (
//         <div className="snow">
//           {Array.from({ length: 50 }).map((_, i) => (
//             <div key={i} className="flake">❄</div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


  import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [clicks, setClicks] = useState(0);
  const [stairs, setStairs] = useState(0);
  const [showMusicButton, setShowMusicButton] = useState(false);
  const [musicActivated, setMusicActivated] = useState(false);
  const [bonusActivated, setBonusActivated] = useState(false);
  const [bgColor, setBgColor] = useState('#ffffff');
  const [showBonusButton, setShowBonusButton] = useState(false);

  const [stairCost, setStairCost] = useState(100);
  const [achievements, setAchievements] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const [clickPower, setClickPower] = useState(1);
  const [cps, setCps] = useState(0);
  const audioRef = useRef(new Audio('/where-are-the-larks-12568.mp3'));

  const tracks = [
    '/celestial_choirs.mp3',
    '/celestial_calm.mp3',
    '/soothing_celestial.mp3',
    '/dreamy_loop.mp3'
  ];

  audioRef.current.loop = true;

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Normal + Extra merged advancements
  const normalAdvancements = [
    { id: 1, name: "First Step", requirement: 1, reward: "Gain +1 CPS" },
    { id: 2, name: "Click Apprentice", requirement: 50, reward: "Click Power +1" },
    { id: 3, name: "Click Master", requirement: 100, reward: "Click Power +2" },
    { id: 4, name: "The Builder", requirement: 1, type: "stairs", reward: "Gain +5 CPS" },
    { id: 5, name: "Stair Collector", requirement: 10, type: "stairs", reward: "Click Power +5" },
    { id: 6, name: "Click Legend", requirement: 500, reward: "Click Power +10" },
    { id: 7, name: "Floor Walker", requirement: 50, type: "stairs", reward: "Gain +10 CPS" },
    { id: 8, name: "Endless Tapper", requirement: 2000, reward: "Click Power +25" },
    { id: 9, name: "Monument Maker", requirement: 100, type: "stairs", reward: "Gain +50 CPS" },
    { id: 10, name: "Grand Clicker", requirement: 5000, reward: "Click Power +50" },
  ];

  // Hidden + Ultra merged advancements
  const hiddenAdvancements = [
    { id: 101, name: "Hidden Step", requirement: 250, reward: "Click Power +100" },
    { id: 102, name: "Secret Climber", requirement: 50, type: "stairs", reward: "Gain +200 CPS" },
    { id: 103, name: "Ultra Tapper", requirement: 10000, reward: "Click Power +500" },
    { id: 104, name: "Silent Architect", requirement: 200, type: "stairs", reward: "Gain +1000 CPS" },
    { id: 105, name: "The Eternal", requirement: 50000, reward: "Click Power +2000" },
  ];

  // Auto clicks from CPS
  useEffect(() => {
    const interval = setInterval(() => {
      setClicks((c) => c + cps);
    }, 1000);
    return () => clearInterval(interval);
  }, [cps]);

  // Check achievements
  useEffect(() => {
    const unlocked = [...achievements];

    normalAdvancements.forEach((a) => {
      if (
        !unlocked.includes(a.id) &&
        (a.type === "stairs" ? stairs >= a.requirement : clicks >= a.requirement)
      ) {
        unlocked.push(a.id);
        applyReward(a.reward);
      }
    });

    hiddenAdvancements.forEach((a) => {
      if (
        !unlocked.includes(a.id) &&
        (a.type === "stairs" ? stairs >= a.requirement : clicks >= a.requirement)
      ) {
        unlocked.push(a.id);
        applyReward(a.reward);
      }
    });

    setAchievements(unlocked);
  }, [clicks, stairs]);

  // Apply rewards
  const applyReward = (reward) => {
    if (reward.includes("Click Power")) {
      const val = parseInt(reward.split("+")[1]);
      setClickPower((p) => p + val);
    }
    if (reward.includes("Gain") && reward.includes("CPS")) {
      const val = parseInt(reward.split("+")[1]);
      setCps((c) => c + val);
    }
  };

  // Click handler
  const handleClick = () => {
    // setClicks(clicks + clickPower);
    const increment = (bonusActivated ? 2 : 1) + stairs; // ✅ increment logic
  const newClickCount = clicks + increment;

  setClicks(newClickCount);
  if (!showBonusButton && newClickCount >= 10 && !bonusActivated) {
      setShowBonusButton(true);
    }
    if (!showMusicButton && newClickCount >= 50 && !musicActivated) {
      setShowMusicButton(true);
    }
    if (bonusActivated) {
      setBgColor(getRandomColor());
    }

  };
    const handleBonusClick = () => {
    if (clicks >= 10) {
      setClicks((prev) => prev - 10);
      setShowBonusButton(false);
      setBonusActivated(true);
    }
  };
  const handleMusicClick = () => {
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

  if (audioRef.current) {
    // stop current audio
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.src = randomTrack; // just swap track
  } else {
    audioRef.current = new Audio(randomTrack);
    audioRef.current.loop = true;
  }

  audioRef.current.play().catch(() => {}); // safe play
  setMusicActivated(true);
  setShowMusicButton(false);
  setCps((prev) => prev + 3);
};

  // Buy stair
  const buyStair = () => {
    if (clicks >= stairCost) {
      setClicks(clicks - stairCost);
      setStairs(stairs + 1);
      setStairCost(Math.floor(stairCost * 1.1)); // ✅ 1.10 multiplier
    }
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor, position: 'relative', height: '100vh' }}>
      <div className="game-container">
        <h1>Heavenly Clicker</h1>
        <p>Clicks: {clicks}</p>
        <p>Stairs: {stairs}</p>
        <p>Click Power: {clickPower}</p>
        <p>CPS: {cps}</p>

        <button className="main-button" onClick={handleClick}>
          Click Me!
        </button>
        {showBonusButton && (
          <button className="bonus-button" onClick={handleBonusClick}>
            Unlock Color Change (-10 clicks)
          </button>
        )}
        {showMusicButton && (
          <button className="music-button" onClick={handleMusicClick}>
            Unlock Background Music
          </button>
        )}

        {clicks >= 150 && (
          <button className="bonus-button" onClick={buyStair}>
            Buy Stair ({stairCost} clicks)
          </button>
        )}

        <br />
        <button
          className="bonus-button"
          onClick={() => setShowAchievements(!showAchievements)}
        >
          {showAchievements ? "Hide Achievements" : "Show Achievements"}
        </button>

        {showAchievements && (
          <div>
            <h2>Normal Advancements</h2>
            <ul>
              {normalAdvancements.map((a) => (
                <li key={a.id}>
                  {achievements.includes(a.id) ? (
                    <>
                      {a.name} – Reward: {a.reward}
                    </>
                  ) : (
                    "??? : ???"
                  )}
                </li>
              ))}
            </ul>

            <h2>Hidden Advancements</h2>
            <ul>
              {hiddenAdvancements.map((a) => (
                <li key={a.id}>
                  {achievements.includes(a.id) ? (
                    <>
                      {a.name} – Reward: {a.reward}
                    </>
                  ) : (
                    "??? : ???"
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
