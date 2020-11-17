import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay,CenterDiv } from './styles/player';
import YouTube from 'react-youtube'

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
        <CenterDiv>

          <YouTube videoId={src} opts={opts} />
        </CenterDiv>
      </Overlay>,
      document.body
    )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};