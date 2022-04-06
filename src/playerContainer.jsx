import React from "react";
import styled from "styled-components";
import th13_img from "./assets/th13_img.png";
import th12_img from "./assets/th12_img.png";
import th11_img from "./assets/th11_img.png";
import th10_img from "./assets/th10_img.png";
import th9_img from "./assets/th9_img.png";

export default function Player({ name, th, num, id, updatePlayers }) {
  const removePlayer = (id) => {
    const players = JSON.parse(localStorage.getItem("Players"));
    for (let i = 0; i < players.length; i++) {
      if (players[i].id === id) {
        players.splice(i, 1);
        localStorage.setItem("Players", JSON.stringify(players));
        updatePlayers(players);
        console.log(players);
        break;
      }
    }
  };

  const thDisp = (th) => {
    switch (th) {
      case "13":
        return th13_img;
      case "12":
        return th12_img;
      case "11":
        return th11_img;
      case "10":
        return th10_img;
      case "9":
        return th9_img;
      default:
        return th;
    }
  };
  return (
    <PlayerContainer>
      <PlayerInfo>{num}</PlayerInfo>
      <PlayerInfo>{name}</PlayerInfo>
      <ThImg src={thDisp(th)} alt={th}></ThImg>
      <Option onClick={() => removePlayer(id)}>x</Option>
    </PlayerContainer>
  );
}

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  margin: 4px;
  text-align: left;
  grid-column-gap: 10px;
`;

const PlayerInfo = styled.span`
  position: relative;
  font-size: 16px;
  color: #303030;
  padding: 4px;
  padding-left: 16px;
  border-radius: 8px;
  margin: 4px;
  font-weight: 700;
`;

const ThImg = styled.img`
  height: 40px;
  width: 40px;
`;

const Option = styled.button`
  height: 30px;
  width: 30px;
  outline: none;
  border-radius: 8px;
  font-size: 16px;
  background-color: #222a34;
  color: white;
  font-weight: 500;
  margin: 8px 16px 0px 16px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #ca0000;
    transform: translateY(-2px);
  }
`;
