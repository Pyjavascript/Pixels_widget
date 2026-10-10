import React, { useEffect, useState } from "react";
import icon from "../assets/timeComponent/icon.svg";
import logo from "../assets/logo.svg";

const TimeComponent = () => {
  const [mumbaiTime, setMumbaiTime] = useState("");
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [weather, setWeather] = useState("--° c");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();

      // Format time for Mumbai (12-hour format with AM/PM)
      const timeString = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      // Extract Day (DD)
      const dayString = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
      }).format(now);

      // Extract Month full name (e.g., June, August)
      const monthString = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        month: "long",
      }).format(now);

      setMumbaiTime(timeString);
      setDay(dayString);
      setMonth(monthString);
    };

    updateTimeAndDate();
    const intervalId = setInterval(updateTimeAndDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // 2. Fetch Live Mumbai Weather Data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Mumbai Coordinates: lat = 19.0760, lon = 72.8777
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current=temperature_2m"
        );
        const data = await response.json();

        if (data?.current?.temperature_2m !== undefined) {
          const temp = Math.round(data.current.temperature_2m);
          setWeather(`${temp}° c`);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
    // Refresh weather every 10 minutes
    const weatherInterval = setInterval(fetchWeather, 600000);

    return () => clearInterval(weatherInterval);
  }, []);
  return (
    <div className="flex flex-col gap-3.75 m-2.5 timeComponent">
      <div className="bg-[#D2E3F8] w-65 h-30 rounded-[25px] p-2.25 flex justify-between text-[#090B48]">
        <div className="w-27.5 h-26.25 bg-white rounded-[20px] flex flex-col  justify-between py-1.5">
          <p className="text-[20px] ml-2.5">Mumbai</p>
          <div className="bg-[#D2E3F8] p-2.5 rounded-[14px] w-24 h-11 flex justify-center items-center ml-1.5">
            <p className="text-[25px]">{mumbaiTime || "11:11 AM"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1.25">
          <div className="flex gap-1.25">
            <div className="w-15 h-12.5 bg-white rounded-[20px] flex justify-center items-center">
              <img src={icon} alt="Time Icon" />
            </div>
            <div className="w-15 h-12.5 bg-white rounded-[20px] flex justify-center items-center text-[#090B48] text-[22px]">
              <p>{weather || "34° c"}</p>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-[20px] flex justify-center items-center text-[#090B48] text-[22px] gap-9.5">
            <p>{day || "06"}</p>
            <p>{month || "June"}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5">
        <div className="w-24.5 h-11.5 rounded-[20px] bg-[#D2E3F8] flex justify-center items-center gap-3.75">
          <div className="mt-0.75">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="8" height="8" rx="4" fill="#090B48" />
            </svg>
          </div>
          <p className="text-[25px]">LIVE</p>
        </div>
        <div className="w-11.5 h-11.5 rounded-[20px] bg-[#D2E3F8] flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default TimeComponent;


const cards = document.querySelectorAll('.wrapper-bottom_images');

cards.forEach(card => {
  card.addEventListener('click', () => {

    const nameElement = card.querySelector('.image-tag div');
    const doctorName = nameElement ? nameElement.innerText.toLowerCase() : '';

    let popupId = '';

    if (doctorName.includes('Norman')) {
      popupId = 'norman';
    } else if (doctorName.includes('Rita')) {
      popupId = 'rita';
    } else if (doctorName.includes('Alvaro')) {
      popupId = 'Alvaro';
    } else if (doctorName.includes('Edward')) {
      popupId = 'edward';
    } else if (doctorName.includes('Jordan')) {
      popupId = 'jordan';
    } else if (doctorName.includes('Paul')) {
      popupId = 'paul';
    }

    if (popupId) {
      const targetPopup = document.getElementById(popupId);
      if (targetPopup) {
        targetPopup.classList.add('bg_dark');
      }
    }
  });
});

document.querySelectorAll('.cancel-btn').forEach(cancelBtn => {
  cancelBtn.addEventListener('click', (e) => {

    const popup = cancelBtn.closest('.dr_pop_up') || cancelBtn.closest('[id]');
    if (popup) {
      popup.classList.remove('bg_dark');
    }
  });
});