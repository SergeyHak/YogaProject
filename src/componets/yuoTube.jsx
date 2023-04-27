import React from "react";
import YouTube from "react-youtube";

function Example() {
  const props = {
    width: "1160",
    height: "639",
    playerVars: {
      autoplay: 1,
    },
  };
  let videoId = "TucdWmkUG9s";
  return <YouTube videoId={videoId} opts={props} onReady={_onReady} />;

  function _onReady(event) {
    event.target.pauseVideo();
  }
}
export default Example;
