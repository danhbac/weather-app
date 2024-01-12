import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Footer from "./footer";
import Header from "./header";

interface IFiveDays {
  location: {
    name: string;
  };
  
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          mintemp_c:number;
          maxtemp_c:number;
          daily_chance_of_rain:number;
          condition: {
            text: string;
            icon: string;
          }
        }
        hour: [
          {
            temp_c: number;
            condition: {
              icon: string;
            };
          },
        ];
      },
    ];
  };
}

const Days = () => {
  const [fiveDays, setFiveDays] = useState<IFiveDays | null>(
    null
  );

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Đà Nẵng&days=5&aqi=no&alerts=no&lang=vi"
        );

        setFiveDays(response.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const time = moment().date();
  const data = [time + 1, time + 2, time + 3];
  
  return (
    <div className="bg-slate-400 w-screen h-screen flex justify-center items-center">
      
      <div className="screen bg-[url('/img/background.jpg')] border-solid border-8 relative border-black rounded-3xl w-[360px] h-[680px] overflow-y-auto text-white ">
        <main>
          <Header/>
        </main>
        <div className="p-4">
          <div className="bg-slate-800 bg-opacity-60 mt-4 p-2 rounded-xl">
            <p className="text-2xl">Dự báo 3 ngày</p>
            <hr />
            {data.map((d,index) => {
              return (
                <div key={index} className="bg-slate-900 bg-opacity-50 px-8 py-2 mt-2 text-sm flex items-center justify-between text-sm rounded-xl text-center">
                  
                  <p>Ngày {d}</p>
                  <div>
                    <p> 
                      <img src={fiveDays?.forecast.forecastday[index]?.day.condition.icon} alt="" />
                    </p>
                    <p>{fiveDays && fiveDays.forecast.forecastday[index]?.day.daily_chance_of_rain}%</p>
                  </div>
                  <div className="flex justify-between w-24">
                    <p>{fiveDays && fiveDays.forecast.forecastday[index]?.day.mintemp_c}℃</p>
                    <p>/</p>
                    <p>{fiveDays && fiveDays.forecast.forecastday[index]?.day.maxtemp_c}℃</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Days;