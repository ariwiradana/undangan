import React from "react";
import { URL_LOCATION } from "../../../config";
import { Button } from "../../atoms";

const LocationSection = () => {
  return (
    <div
      className="w-full flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.9357097357592!2d114.95945831478089!3d-8.209220494092117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1831a393b1a39%3A0x1ce27487babfe721!2sJl.%20Raja%20Ida%20Made%20Rai%2C%20Banjar%2C%20Kec.%20Banjar%2C%20Kabupaten%20Buleleng%2C%20Bali%2081152!5e0!3m2!1sen!2sid!4v1645126683928!5m2!1sen!2sid"
        allowfullscreen={true}
        loading="lazy"
        title="maps"
        style={{ height: 500 }}
      ></iframe>
      <div
        className="px-8 mt-8 w-full"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <a href={URL_LOCATION} target="_blank">
          <Button
            title="Petunjuk Arah ke Lokasi"
            className="w-full flex justify-center rounded-md h-12 items-center"
          />
        </a>
      </div>
    </div>
  );
};

export default LocationSection;
