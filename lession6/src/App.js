import "./App.css";
import { Player } from "./component/player";
import { useState } from "react";
function App() {
  const listPlayer = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      position: "Tiền vệ",
      age: 35,
      rate: 100,
    },
    {
      id: 2,
      name: "Ronaldinho",
      position: "Hậu vệ",
      age: 32,
      rate: 80,
    },
    {
      id: 3,
      name: "Roberto Carlos",
      position: "Trung vệ",
      age: 37,
      rate: 10,
    },
    {
      id: 4,
      name: "Paco Gento",
      position: "Thủ môn",
      age: 30,
      rate: 30,
    },
  ];
  const VALID_NUMBER_PLAYER = 70;
  const [player, setPlayer] = useState(listPlayer);
  const list = player.map((player) => (
    <Player key={player.id} players={player} />
  ));
  const addNewMember = () => {
    const newMember = {
      id: player.length + 1,
      name: "Nilton Santos",
      position: "Hậu vệ cánh",
      age: 28,
      rate: 50,
    };
    const newState = [...player, newMember];
    console.log(newState);
    setPlayer(newState);
  };
  const onFireMember = () => {
    const fireState = player.filter(
      (player) => player.rate >= VALID_NUMBER_PLAYER
    );
    setPlayer(fireState);
  };

  return (
    <div className="App">
      <div>
        <button className="addMember" onClick={addNewMember}>
          Add Member
        </button>
        <button className="fireMember" onClick={onFireMember}>
          Fire Member
        </button>
      </div>
      {list}
    </div>
  );
}

export default App;
