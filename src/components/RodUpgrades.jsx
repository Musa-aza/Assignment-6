export default function RodUpgrades(props) {
  function handleLevel() {
    props.onClick(props.upgrade);
  }

  return (
    <>
      <div className="buddy">
        <h1>{props.upgrade.rodName}</h1>
        <h3>{props.upgrade.disc}</h3>
        <p>We would like {props.upgrade.cost} fishes to join your team</p>
        <p>
          And we will try our best to Catch {props.upgrade.increase} Fishes Per
          Second
        </p>
        <button onClick={handleLevel}>Buy</button>
      </div>
    </>
  );
}
