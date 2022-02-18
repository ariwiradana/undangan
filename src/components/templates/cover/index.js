import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { AppContext } from "../../../context";
import { TYPE } from "../../../config";
import { Button, Container } from "../../atoms";

const Cover = ({ setOverflow }) => {
  const { state, dispatch } = useContext(AppContext);
  const [hide, setHide] = useState(false);

  const handlePlayPauseAudio = () => {
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
    <Container className="w-full h-screen overflow-hidden bg-cover z-50 relative">
      <div className="w-full h-screen bg-cover overflow-hidden">
        <img
          src="https://source.unsplash.com/random/1080x1920/?wedding"
          className="w-full h-full object-cover grayscale bg-gray-600"
          alt="cover-img"
          loading="lazy"
        />
      </div>
      <Container className="bg-black bg-opacity-50 w-full h-full absolute top-0 flex flex-col justify-center items-center py-8">
        <div className="text-center">
          <p
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={1000}
            className="text-white font-cormorant-garamond text-xl italic"
          >
            {state.lang === "en"
              ? "The Wedding of"
              : state.lang === "jpn"
              ? "結婚式招待状"
              : "Undangan Pernikahan"}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={1250}
            className="text-white font-tangerine text-5xl md:text-6xl font-bold"
          >
            Mertayasa & Konami
          </p>
          <p
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={1500}
            className="text-white font-cormorant-garamond text-2xl my-1 italic"
          >
            {state.lang === "en"
              ? "Monday"
              : state.lang === "jpn"
              ? "月曜"
              : "Senin"}
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={1750}
            className="text-white font-tangerine text-4xl"
          >
            {state.lang === "en"
              ? "7 / march / 2022"
              : state.lang === "jpn"
              ? "2022年3月7日"
              : "7 / maret / 2022"}
          </p>
          <div
            data-aos="fade-in"
            data-aos-duration={1000}
            data-aos-delay={2000}
            className="w-full flex justify-center"
          >
            <svg
              className="fill-white w-20 h-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 92.83 37.39"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="OBJECTS">
                  <path d="M23.06,34.65c-.12-3.32-1.59-6-3.4-8.71-2.23-3.33-5.26-5.47-7.81-8.41l0-.19a.38.38,0,0,0-.43-.35l0,0c-.29-.84-.56-1.69-.8-2.51,3.09.78,6.25,1.4,9.44,1.91a22.15,22.15,0,0,0,3.64,4.79s0,.05,0,.07c3,8.65,11.59,15.51,20.7,16.19a.48.48,0,0,0,.52-.45c-.19-4.07-3.82-7.18-6.64-9.71-4.34-3.91-9.59-5.83-14.76-8.35q-1.08-1.17-2.19-2.34c5.87.88,11.8,1.44,17.46,2.1a27,27,0,0,0,3.11,2.93.34.34,0,0,0-.19.55c5,6.81,13,13,21.8,12.78a.51.51,0,0,0,.49-.72,23.84,23.84,0,0,0-20.76-13L40.11,18.8c5.22.62,10.48,1.13,15.73,1.31A22.12,22.12,0,0,0,62.19,24c5.22,4.42,11.36,8.73,18.51,7.38a.45.45,0,0,0,.31-.64c-2.66-5.83-13.57-9.39-19.76-8.24a42.65,42.65,0,0,1-4.06-2.29,94,94,0,0,0,10.62-.31,33,33,0,0,0,6.48,1.67.41.41,0,0,0,.24.28,34.78,34.78,0,0,0,10.16,2.82c2.59.31,5.44.89,7.88-.3a.45.45,0,0,0,.15-.7C88.58,19,80,18.78,74.54,21h0a22.53,22.53,0,0,1-2.78-.66c-.61-.19-1.19-.45-1.77-.69,1.72-.21,3.43-.47,5.14-.8,2.69,1.07,6.61.43,9.22-.25,3.18-.83,5.71-2.89,6.22-6.23a.39.39,0,0,0-.37-.42c-5.7-.42-10.7,2.22-14.74,6.11-.24,0-.48,0-.71,0a.35.35,0,0,0-.32.38c-2,.3-3.91.54-5.86.7a6.22,6.22,0,0,0-.88-.17.36.36,0,0,0-.39.26c-.4,0-.8,0-1.21.06.64-.34,1.25-.75,1.8-1.11l.78-.51a.41.41,0,0,0,.38.26c3.81-.25,6.59-2.18,9.34-4.61,1.13-1,5.22-4.15,4.27-6.08-1.14-2.31-5.85,1.31-7.1,1.82-3.75,1.55-9.11,3.72-8.68,8.62a.18.18,0,0,0,.14.16c-.34.21-.69.42-1,.61-.69.37-1.42.6-2.1.95a117.6,117.6,0,0,1-12.3-.3,12.61,12.61,0,0,0,2.81-2.18,10.24,10.24,0,0,0,.72-.75.41.41,0,0,0,.51.24c4.81-1.66,10.58-6.63,11.06-11.94a.47.47,0,0,0-.43-.5c-5.4-.87-15,7-12.64,12.83a9.84,9.84,0,0,1-1.44,1c-.88.5-1.87.67-2.76,1.11-2.54-.22-5.09-.51-7.63-.84l-3.1-.41-.05,0a.26.26,0,0,0-.32,0c-.92-.12-1.83-.23-2.74-.36a8.92,8.92,0,0,0,1.87-1.35.25.25,0,0,0,.13.05c3.4.14,7-3.54,9.13-5.79,2.46-2.61,4.64-6,4.7-9.73A.42.42,0,0,0,50.91,0c-3.63.44-6.81,3.33-9.54,5.53-3.14,2.54-5.61,5.64-5.08,9.87-1,.61-2.12,1-3.23,1.53-5.19-.71-10.34-1.49-15.46-2.44a12,12,0,0,0,2.3-1c3.39-.28,7.12-2.1,9.86-3.72,3.32-2,5.85-5,6-8.94a.47.47,0,0,0-.44-.5c-7.1,0-16.58,5.24-17.19,13.1a11.11,11.11,0,0,1-2.91.62A152.08,152.08,0,0,1,.38,10.36a.3.3,0,0,0-.19.56,62.91,62.91,0,0,0,9.49,3.29A33.07,33.07,0,0,0,11,18.13c.18,3.6.11,7.16,2.42,10.18s5.55,5,9,6.78A.5.5,0,0,0,23.06,34.65ZM33.18,24.43c3.24,1.79,6,4.74,8.39,7.52,1.91,2.22,3.25,4.89-1.06,3.88a21.07,21.07,0,0,1-7.14-3.55c-3.59-2.51-6-6-8.19-9.66a81.08,81.08,0,0,0,9.21,6.94.24.24,0,0,0,.28-.4,58.17,58.17,0,0,1-9.91-8.88C27.51,21.76,30.43,22.91,33.18,24.43Zm28.57,7.9c2.51,3.84-8.24-1.06-9.57-1.75C48.4,28.61,46,25.4,43,22.51c2.93,2.21,6.18,4.08,9.14,6,.3.19.6-.26.31-.45-2.83-1.94-5.54-4-8.22-6C51.5,23.42,57.4,25.7,61.75,32.33Zm15-5a9.39,9.39,0,0,1,3.17,3.16c.15.26-6-.37-6.73-.61-2.92-.95-5.4-2.82-7.86-4.66,2,.76,4.06,1.47,5.9,2.32.27.12.41-.3.16-.42-3-1.42-6-2.65-9-4.06A29.63,29.63,0,0,1,76.77,27.31Zm13.33-5c2.42,1.33-.39,1.69-1.67,1.63s-2.45-.24-3.66-.39a39.53,39.53,0,0,1-6.13-1.32,7.75,7.75,0,0,0,3.15,0h0a.11.11,0,0,0,.07-.06.09.09,0,0,0,0-.05s0,0,0-.05a.13.13,0,0,0-.06-.07h0c-1.12-.53-3-.4-4.24-.56l-1.42-.19C80.77,20.32,85.86,20,90.1,22.31ZM82.67,14a13.94,13.94,0,0,1,5.52-1.32c2.39-.12.86,2,0,3-2.65,2.84-6.38,2.71-10,2.51l1.13-.27a0,0,0,0,0,0,0l.51,0a0,0,0,1,0,0-.06l-.3,0c.47-.13.93-.24,1.4-.38.19-.06.14-.37-.07-.32-1.48.37-3,.67-4.45.95h-.11A69,69,0,0,1,82.67,14ZM75.89,9.73A34,34,0,0,0,79,8.16c1.4-.73,3.68-1.1,2.23,1a24.61,24.61,0,0,1-4.81,4.64A18,18,0,0,1,73.2,16a19.1,19.1,0,0,1-3.65,1.06c1.39-.92,2.77-1.85,4.18-2.75.13-.08.08-.34-.1-.29a18,18,0,0,0-4.76,2.61c-.5.34-1,.67-1.53,1C67.78,13,72.1,11.25,75.89,9.73ZM62.83,5.36c.51-.21,2.9-1,2.84-.29-.18,2-1.54,3.72-2.83,5.11-2,2.14-4.6,3.32-6.87,5,1.14-1.36,2.16-2.83,3.26-4.21.16-.2-.15-.4-.31-.22-1.42,1.66-2.73,3.41-4.23,5-.2.22-.43.41-.65.61C53.26,11.54,59,7,62.83,5.36ZM43.08,5.19a44.94,44.94,0,0,1,4.08-2.9c.36-.22,3.4-1.77,3.34-1.22-.37,3.41-2.88,6.54-5.15,8.93-2,2.05-4.24,3.13-6.53,4.46,1.33-1.55,2.47-3.27,3.3-4.36.19-.24-.2-.51-.39-.27a39,39,0,0,1-3.9,4.43,9.3,9.3,0,0,1-.95.76C36.71,10.53,39.84,7.76,43.08,5.19ZM25.75,4.13a20,20,0,0,1,5.53-2.39,17.16,17.16,0,0,1,2.48-.44c1.77-.21.9,1.15.6,2.1-1.61,5.07-6.93,6.71-11.74,8.16a34.35,34.35,0,0,0,2.83-2.67c.18-.19-.06-.49-.27-.31a43.53,43.53,0,0,1-4.8,3.67c-.53.17-1,.35-1.52.53A16.42,16.42,0,0,1,25.75,4.13ZM18.44,31.68a16.1,16.1,0,0,1-4.75-4.8c-1.25-1.93-1.39-4.05-1.52-6.19A12.52,12.52,0,0,0,15.8,25a.26.26,0,0,0,.29-.42A13.21,13.21,0,0,1,12,18.75a.43.43,0,0,1,0-.05c1.47,1.62,3.19,3,4.68,4.62a24.12,24.12,0,0,1,5.17,9.4C22.23,34.11,18.56,31.76,18.44,31.68Z" />
                </g>
              </g>
            </svg>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={2250}
            className="text-white font-cormorant-garamond tracking-widest font-bold my-2 w-full flex flex-col items-center justify-center"
          >
            <p className="w-3/4 uppercase">
              {state.lang === "en"
                ? "we invite you to celebrate our wedding"
                : state.lang === "jpn"
                ? "私たちの結婚式を祝うためにあなたを招待します"
                : "kami mengundang Anda untuk merayakan pernikahan kami"}
            </p>
            {!hide && (
              <Link to="body" smooth spy duration={1000}>
                <Button
                  title={
                    state.lang === "en"
                      ? "Open Invitation"
                      : state.lang === "jpn"
                      ? "招待状を開く"
                      : "Buka Undangan"
                  }
                  onClick={() => {
                    setOverflow(false);
                    handlePlayPauseAudio();
                    setInterval(() => {
                      setHide(true);
                    }, 1000);
                  }}
                />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Cover;
