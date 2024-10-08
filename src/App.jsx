import "./App.css";
import FishCount from "./components/FishCount";
import FishesPerClick from "./components/FishesPerClick";
import RodUpgrades from "./components/RodUpgrades";
// import Lvl2 from "./components/Lvl2";
import buddyData from "./lib/buddyData.json";
// import lvl2Data from "./lib/lvl2Data.json";
import { useState, useEffect } from "react";

export default function App() {
  const [fishesPerSecondCount, setFishesPerSecondCount] = useState(1);
  const [fishCount, setFishCount] = useState(0);

  function addFish() {
    setFishCount(fishCount + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setFishCount((currentFishes) => currentFishes + fishesPerSecondCount);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [fishesPerSecondCount]);

  function handleClick(upgrade) {
    if (fishCount > upgrade.cost) {
      setFishesPerSecondCount(fishesPerSecondCount + upgrade.increase);
      setFishCount(fishCount - upgrade.cost);
    } else {
      alert("Thats not a fair price, I would like a bit more Fishes");
    }
  }
  // function handleLvL(LvLUp) {
  //   if (fishCount > LvLUp.price) {
  //     // <a href="./LvL2.html" />;
  //     setFishCount(0);
  //   } else {
  //     alert("Your Goal is 1 Milion!");
  //   }
  // }

  return (
    <>
      <div className="title">
        <h1>Fishing Simulator</h1>

        <FishCount fishCount={fishCount} addFish={addFish} />
        <FishesPerClick fishesPerSecondCount={fishesPerSecondCount} />
        <h1>Buddys</h1>
      </div>
      <div>
        {/* <div>
          {lvl2Data.map((LvLUp) => (
            <div key={LvLUp.id}>
              <Lvl2 LvLUp={LvLUp} onClick={handleLvL} />
            </div>
          ))}
        </div> */}
        {buddyData.map((upgrade) => (
          <div key={upgrade.id}>
            <RodUpgrades upgrade={upgrade} onClick={handleClick} />
          </div>
        ))}
      </div>
    </>
  );
}
