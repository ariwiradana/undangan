import React, { useContext } from "react";
import { IoIosSend } from "react-icons/io";
import { URL_LOCATION } from "../../../config";
import { AppContext } from "../../../context";
import { Button, Frame, PlaceAndTime } from "../../atoms";

const PlaceAndTimeSection = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="p-6 bg-primary my-8 relative m-8">
      <Frame className="absolute bottom-4 right-4 w-24 fill-white rotate-90" />
      <Frame className="absolute top-4 left-4 w-24 fill-white -rotate-90" />
      <Frame className="absolute bottom-4 left-4 w-24 fill-white rotate-180" />
      <Frame className="absolute top-4 right-4 w-24 fill-white" />
      <PlaceAndTime
        title={
          state.lang === "en"
            ? "Monday"
            : state.lang === "jpn"
            ? "月曜"
            : "Senin"
        }
        caption={
          state.lang === "en"
            ? "7 / march / 2022"
            : state.lang === "jpn"
            ? "2022年3月7日"
            : "7 / maret / 2022"
        }
      />
      <PlaceAndTime
        title={
          state.lang === "en" ? "Time" : state.lang === "jpn" ? "時間" : "Waktu"
        }
        caption={
          state.lang === "en"
            ? "1pm - 10pm"
            : state.lang === "jpn"
            ? "午後1時〜午後10時"
            : "13.00 - 22.00"
        }
      />
      <PlaceAndTime
        title={
          state.lang === "en"
            ? "located at"
            : state.lang === "jpn"
            ? "にあります"
            : "Lokasi"
        }
        caption={
          state.lang === "en"
            ? "Banjar, Buleleng, Bali"
            : state.lang === "jpn"
            ? "バンジャール、ブエレレン、バリ"
            : "Banjar, Buleleng, Bali"
        }
      />
      <a
        href={URL_LOCATION}
        target="_blank"
        class="flex justify-center mb-8"
      >
        <Button
          title={
            state.lang === "en"
              ? "Map Location"
              : state.lang === "jpn"
              ? "ロケーションマップ"
              : "Peta Lokasi"
          }
          icon={<IoIosSend />}
          className="border border-white py-1"
        />
      </a>
    </div>
  );
};

export default PlaceAndTimeSection;
