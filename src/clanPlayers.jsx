import React from "react";
import Player from "./playerContainer";
import styled from "styled-components";

export default function ClanPlayer({ clan, players, setPlayers }) {
  let counter = 0;

  return (
    <ClanContainer>
      <Glass>
        <ClanName>{clan}</ClanName>
        <SubTitles>
          <span>No.</span>
          <span>Name</span>
          <span>TH</span>
          <span></span>
        </SubTitles>
        <ScrollContainer>
          <PlayerContainer>
            {players.map((player) => {
              if (clan === player.clanname) {
                counter++;
              }
              return clan === player.clanname ? (
                <Player
                  key={counter + clan}
                  name={player.name}
                  th={player.townhall}
                  num={counter}
                  id={player.id}
                  updatePlayers={setPlayers}
                ></Player>
              ) : (
                ""
              );
            })}
          </PlayerContainer>
        </ScrollContainer>
      </Glass>
    </ClanContainer>
  );
}

const ClanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Glass = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 10px;
  background: linear-gradient(
    114deg,
    rgba(255, 255, 255, 0.48) 1.41%,
    rgba(255, 255, 255, 0.34) 99.96%
  );
  backdrop-filter: blur(8px);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-sizing: border-box;
  background-repeat: no-repeat;
  flex-direction: column;
  max-width: 100%;
  max-height: 450px;
`;

const ScrollContainer = styled.div`
  max-width: 100%;
  max-height: 450px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const SubTitles = styled.span`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  font-size: 24px;
  color: #303030;
  padding: 4px;
  padding-left: 16px;
  border-radius: 8px;
  margin: 4px;
  font-weight: 700;
  position: sticky;
  text-align: left;
  grid-column-gap: 10px;
`;

const ClanName = styled.h1`
  position: sticky;
  font-size: 36px;
  font-weight: 700px;
  color: #1a1a1a;
  margin-bottom: 0;
`;

const PlayerContainer = styled.span`
  margin: 8px;
`;
