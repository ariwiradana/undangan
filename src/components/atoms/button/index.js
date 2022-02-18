import React, { useContext } from "react";
import { BsPlayFill, BsPauseFill, BsPhoneLandscapeFill } from "react-icons/bs";
import { AppContext } from "../../../context";
import { TYPE } from "../../../config";

export const Button = ({ title, className, icon, ...props }) => {
  return (
    <button
      {...props}
      className={`text-white bg-primary font-cormorant-garamond font-lg px-4 py-2 mt-5 rounded-full transition hover:scale-105 ease-in-out duration-200 ${className}`}
    >
      <div className="flex items-center">
        {icon && icon}
        {title && <p className={`${icon && "ml-2"}`}>{title}</p>}
      </div>
    </button>
  );
};

export const PlayButton = ({ className }) => {
  const { state, dispatch } = useContext(AppContext);
  const handlePlayPause = () => {
    if (state.isPlayingAudio) {
      state.audio.pause();
    } else {
      state.audio.play();
    }
    dispatch({
      type: TYPE.IS_PLAYING_AUDIO,
      isPlayingAudio: !state.isPlayingAudio,
    });
  };

  return (
    <>
      <button
        onClick={() => handlePlayPause()}
        className={`${className} w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white z-30 border`}
      >
        {state.isPlayingAudio ? (
          <BsPauseFill size={28} />
        ) : (
          <BsPlayFill size={28} />
        )}
      </button>
    </>
  );
};
