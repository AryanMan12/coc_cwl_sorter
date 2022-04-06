import React, { useState } from "react";
import styled from "styled-components";

export default function AddPlayer({ clans, players, setplayers }) {
  const [name, setname] = useState("");
  const [th, setth] = useState("13");
  const [clan, setclan] = useState(clans[0]);
  let [count, setcount] = useState(() => {
    const c = JSON.parse(localStorage.getItem("Id"));
    return c ? c : 0;
  });
  localStorage.setItem("Id", JSON.stringify(count));

  // name
  const updatename = (e) => {
    setname(e.target.value);
  };
  // townhall
  const updateth = (e) => {
    setth(e.target.value);
  };
  // clan
  const updateclan = (e) => {
    setclan(e.target.value);
  };
  // creating data
  const addData = () => {
    // Id
    setcount(JSON.parse(localStorage.getItem("Id")));
    setcount(++count);
    localStorage.setItem("Id", JSON.stringify(count));

    // Adding Players
    const data = { id: count, clanname: clan, name: name, townhall: th };
    let i = 0;
    for (i = 0; i < JSON.parse(localStorage.getItem("Players")).length; i++) {
      if (players[i].townhall < data.townhall) {
        break;
      }
    }
    players.splice(i, 0, data);
    localStorage.setItem("Players", JSON.stringify(players));
    setplayers(JSON.parse(localStorage.getItem("Players")));
    setname("");
  };

  return (
    <Container className="addPlayer">
      <InputBox
        className="name"
        type="text"
        value={name}
        onChange={updatename}
        placeholder="Player Name"
      />
      <LabelTag>Town Hall</LabelTag>
      <SelectBox name="th" id="th" value={th} onChange={updateth}>
        <option value="13">13</option>
        <option value="12">12</option>
        <option value="11">11</option>
        <option value="10">10</option>
        <option value="09">9</option>
      </SelectBox>
      <LabelTag>Clan</LabelTag>
      <SelectBox name="clan" id="clan" value={clan} onChange={updateclan}>
        {clans.map((clan) => (
          <option key={clan} value={clan}>
            {clan}
          </option>
        ))}
      </SelectBox>
      <ButtonTag type="submit" onClick={addData}>
        Add Player
      </ButtonTag>
    </Container>
  );
}
// Styling

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  height: 32px;
  font-size: 16px;
  color: #303030;
  width: 256px;
  padding: 4px;
  padding-left: 16px;
  border: none;
  border-radius: 8px;
  background: #efefef;
  margin: 8px;
  outline: none;
  font-weight: 700;
`;

const SelectBox = styled.select`
  margin: 8px;
  background-color: #efefef;
  color: #303030;
  height: 32px;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  padding: 4px;
`;

const ButtonTag = styled.button`
  height: 48px;
  width: 128px;
  outline: none;
  border-radius: 8px;
  font-size: 16px;
  background-color: #222a34;
  color: white;
  font-weight: 600;
  margin: 8px;
  border: none;
  &:hover {
    background: #047a1e;
    cursor: pointer;
    transform: translate(0px, -2px);
  }
`;

const LabelTag = styled.label`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 8px;
`;
