export const Player = (props) => {
  const { players } = props;
  const { name, position, age,rate } = players;
  return (
    <div className="wrapper">
      <div className="player">
        <h1>Name: {name}</h1>
        <h2>Position:{position}</h2>
        <h3>Age: {age}</h3>
        <h3>Rate: {rate}</h3>
      </div>
    </div>
  );
};
