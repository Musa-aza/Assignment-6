export default function FishCount(props) {
  return (
    <div>
      <h3>
        There are <span>{props.fishCount}</span> fishes in the live well!
      </h3>
      <button onClick={props.addFish}>Fish!</button>
    </div>
  );
}
