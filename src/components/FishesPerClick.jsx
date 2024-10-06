export default function FishesPerClick(props) {
  return (
    <>
      <p>
        Your buddys are catching <span>{props.fishesPerSecondCount}</span>
        fishes for you!
      </p>
    </>
  );
}
