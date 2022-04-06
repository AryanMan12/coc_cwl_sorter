import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import AddPlayer from "./addPlayer";
import ClanPlayers from "./clanPlayers";
import coc_background from "./assets/coc_background.png";

export default function App() {
  // Clans
  const clans = ["Clan 1", "Clan 2"];
  localStorage.setItem("Clans", JSON.stringify(clans));

  // PlayerData
  const [players, setplayers] = useState(() => {
    const ps = JSON.parse(localStorage.getItem("Players"));
    return ps ? ps : [];
  });

  // Updating Players Data
  useEffect(() => localStorage.setItem("Players", JSON.stringify(players)), [
    players,
  ]);

  return (
    <Wrapper>
      <AppContainer className="App">
        <Glass>
          <Title>CWL Players Manager</Title>
          <AddPlayer
            key={clans}
            clans={clans}
            players={players}
            setplayers={setplayers}
          />
          <ClanContainer>
            {clans.map((clan) => (
              <ClanPlayers
                key={clan}
                clan={clan}
                players={players}
                setPlayers={setplayers}
              />
            ))}
          </ClanContainer>
        </Glass>
      </AppContainer>
    </Wrapper>
  );
}

// Styling

const Wrapper = styled.div`
  background-color: #222a34;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const AppContainer = styled.div`
  display: flex;
  background-image: url(${coc_background});
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.div`
  display: flex;
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
  width: 64%;
  height: 90%;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700px;
  color: #1a1a1a;
`;

const ClanContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
