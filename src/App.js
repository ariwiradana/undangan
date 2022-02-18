import React, { useReducer, useState } from "react";
import { Body, Cover } from "./components/templates";
import { AppReducers } from "./reducers";
import { AppContext } from "./context";
import { backsound } from "./assets";

const App = () => {
  const [overflow, setOverflow] = useState(true);
  const [appState] = useState({
    lang: window.location.pathname.replace("/", ""),
    isPlayingVideo: false,
    isPlayingAudio: false,
    audio: new Audio(backsound),
    image: "",
    isShowImage: false,
  });
  const [state, dispatch] = useReducer(AppReducers, appState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="w-full h-full">
        <div
          className={`${
            overflow && "overflow-hidden"
          } w-full h-screen max-w-4xl m-auto`}
        >
          <Cover setOverflow={setOverflow} />
          <Body overflow={overflow} />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
