import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context";
import { Countdown, Description } from "../../atoms";

const CountdownSection = () => {
  const { state } = useContext(AppContext);
  const [expired, setExpired] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleCountdown = () => {
    let countDownDate = new Date("Mar 7, 2022 13:00:00").getTime();
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ ...countdown, days, hours, minutes, seconds });

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        setExpired(true);
      }
    }, 1000);
  };

  useEffect(() => {
    handleCountdown();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={1000}
      className="flex flex-col justify-center items-center my-6"
    >
      <Description top title={"Countdown Timer"} />
      <div
        data-aos="fade-up"
        data-aos-duration={1000}
        className="grid grid-cols-4 divide-x w-full"
      >
        <Countdown title={"Days"} number={countdown.days} />
        <Countdown title={"Hours"} number={countdown.hours} />
        <Countdown title={"Minutes"} number={countdown.minutes} />
        <Countdown title={"Seconds"} number={countdown.seconds} />
      </div>
    </div>
  );
};

export default CountdownSection;
