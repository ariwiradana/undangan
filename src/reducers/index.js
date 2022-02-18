import { TYPE } from "../config";

export const AppReducers = (state, action) => {
  switch (action.type) {
    case TYPE.IS_PLAYING_AUDIO:
      return { ...state, isPlayingAudio: action.isPlayingAudio };
    case TYPE.IS_PLAYING_VIDEO:
      return { ...state, isPlayingVideo: action.isPlayingVideo };
    case TYPE.SHOW_IMAGE:
      return { ...state, image: action.image, isShowImage: true };
    case TYPE.HIDE_IMAGE:
      return { ...state, image: "", isShowImage: false };
    default:
      return state;
  }
};
