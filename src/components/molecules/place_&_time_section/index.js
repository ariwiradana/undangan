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
          <p>
            Monday<span className="mx-2">/</span>
            <span className="text-base">月曜</span>
            <span className="mx-2">/</span>
            <span>Senin</span>
          </p>
        }
        caption={
          <p className="text-white font-tangerine text-3xl">7 / 03 / 2022</p>
        }
      />
      <PlaceAndTime
        title={
          <p>
            Time<span className="mx-2">/</span>
            <span className="text-base">時間</span>
            <span className="mx-2">/</span>
            <span>Waktu</span>
          </p>
        }
        caption={
          <p>
            <p>1pm - 10pm</p>
            <p className="text-base mt-1">午後1時〜午後10時</p>
            <p>13.00 - 22.00</p>
          </p>
        }
      />
      <PlaceAndTime
        title={
          <p>
            Location<span className="mx-2">/</span>
            <span className="text-base">にあります</span>
            <span className="mx-2">/</span>
            <span>Lokasi</span>
          </p>
        }
        caption={"Jl. Raja Ida Made Rai"}
      />
      <a href={URL_LOCATION} target="_blank" class="flex justify-center mb-8">
        <Button
          title={
            <p>
              Map<span className="mx-2">/</span>
              <span className="text-xs">地図</span>
              <span className="mx-2">/</span>
              <span>Peta</span>
            </p>
          }
          icon={<IoIosSend />}
          className="border border-white py-1"
        />
      </a>
    </div>
  );
};

export default PlaceAndTimeSection;
