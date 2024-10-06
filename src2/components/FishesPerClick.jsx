export default function FishesPerClick(props) {
  return (
    <div>
      <p>
        Your buddys are catching <span>{props.fishesPerSecondCount}</span>
        fishes for you!
      </p>
    </div>
  );
}
