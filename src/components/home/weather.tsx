import axios from "axios";
import { useEffect, useState } from "react";
import { FaWind, FaCloudRain, FaEye } from "react-icons/fa";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import { MdSunny } from "react-icons/md";

import Header from "./header";
import Hour from "./hour";
import Footer from "./footer";


interface ICurrentWeather {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph:number;
    precip_mm:number;
    humidity:number;
    feelslike_c:number;
    uv: number;
    vis_km: number;
  };
}

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | null>(
    null
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=c9a0ca46550648b29ce125849232709&q=Đà Nẵng&aqi=no&lang=vi"
        );
        setCurrentWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-slate-400 w-screen h-screen flex justify-center items-center">
      
      <div className="screen bg-[url('/img/background.jpg')] border-solid border-8 relative border-black rounded-3xl w-[360px] h-[680px] overflow-y-auto text-white ">
        <main>
          <Header/>
        </main>
        <section className="text-center mt-10">
          <p className="inline-block text-xl">{currentWeather && currentWeather.location.name}</p>
          <p className=" text-6xl" >{currentWeather && currentWeather.current.temp_c}℃</p>
          <p className="">{currentWeather && currentWeather.current.condition.text}</p>
          <p className="inline-block">
            {currentWeather && (
              <img src={currentWeather.current.condition.icon} alt="" />
            )}
          </p>
        </section>
        <section className="p-3">
         <div className=" flex items-center justify-between mt-4">
            <div className=" bg-slate-700 bg-opacity-50 rounded-lg w-[105px] p-2">
              <div className="flex items-center text-sm text-gray-300">
                <FaWind />
                <p className="ml-1">Gió</p>
              </div>
              <div className="text-center">{currentWeather && currentWeather.current.wind_mph} m/ph</div>
            </div>
            <div className="bg-slate-700 bg-opacity-50 rounded-lg w-[105px] p-2">
              <div className="flex items-center text-sm text-gray-300">
                <FaCloudRain />
                <p className="ml-1">Lượng mưa</p>
              </div>
              <div className="text-center">{currentWeather && currentWeather.current.precip_mm} mm</div>
            </div>
            <div className="bg-slate-700 bg-opacity-50 rounded-lg w-[105px] p-2">
              <div className="flex items-center text-sm text-gray-300">
                <WiHumidity />
                <p className="ml-1">Độ ẩm</p>
              </div>
              <div className="text-center">{currentWeather && currentWeather.current.humidity}%</div>
            </div>
         </div>
         <div className="flex items-center justify-between mt-2">
            <div className="bg-slate-700 bg-opacity-50 rounded-lg w-[105px] p-2">
              <div className="flex items-center text-sm text-gray-300">
                <MdSunny />
                <p className="ml-1">Chỉ số UV</p>
              </div>
              <div className="text-center">{currentWeather && currentWeather.current.uv}</div>
            </div>
            <div className="bg-slate-700 bg-opacity-50 rounded-lg w-[105px] p-2">
              <div className="flex items-center text-sm text-gray-300">
                <WiThermometer />
                <p className="ml-1">Cảm nhận</p>
              </div>
              <div className="text-center">{currentWeather && currentWeather.current.feelslike_c}℃</div>
            </div>
            <div className="bg-slate-700 bg-opacity-50 rounded-lg w-[105px] p-2">
              <div className="flex items-center text-sm text-gray-300">
              <FaEye />
                <p className="ml-1">Tầm nhìn</p>
              </div>
              <div className="text-center">{currentWeather && currentWeather.current.vis_km}km</div>
            </div>
          </div>
        </section>
        <section className="p-3">
         <Hour />
        </section>
        <div className="absolute bottom-0 w-full">
          <Footer/>
        </div>
      </div>
      
    </div>
  );
};

export default Weather;
