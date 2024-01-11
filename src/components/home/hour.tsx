import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";


interface ICurrentHour{
  location: {
    name: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
  forecast: {
    forecastday: [
      {
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
const Hour = () => {
  const [currentHour, setCurrenHour] = useState<ICurrentHour | null>(null);
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=Danang&days=1&aqi=no&alerts=no&lang=vi"
        );

        setCurrenHour(response.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const time = moment().hour();
  const data = [time + 1, time + 2, time + 3, time + 4];
  return (
    <div className="bg-slate-700 bg-opacity-80 rounded-xl p-2 mb-1">
      <p className="">Dự báo hàng giờ</p>
          <hr/>
      <div className="flex justify-between">
        {data.map((h) => {
          return (
            <div key={h} className="bg-slate-800 bg-opacity-50 p-2 mt-2  text-sm rounded-xl text-center">
              
              <p>{h}H</p>
              <p>
                {currentHour && (
                  <img
                    src={
                      currentHour.forecast.forecastday[0].hour[h].condition.icon
                    }
                    width={50}
                    height={50}
                    alt=""
                  />
                )}
              </p>
              <p className="flex pt-2 justify-center">
                  {currentHour &&
                    currentHour.forecast.forecastday[0].hour[h].temp_c.toFixed(0)}℃</p>
            </div>
          );
        })}
      </div>
      </div>
  )
}
export default Hour