import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import moment from "moment";
import Footer from "./footer";
import Header from "./header";
interface ISearchWeather {
  location: {
    name: string;
  };
  forecast: {
    forecastday: [
      {
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          condition: {
            text: string;
            icon: string;
          };
        };
        date: string;
      },
    ];
  };
}
const Search = () => {
  const [searchWeather, setSearchWeather] = useState<ISearchWeather | null>(
    null
  );
  const [city, setCity] = useState<string | null>(null);
  const [search, setSearch] = useState<string | null>(null);
  useEffect(() => {
    try {
      const featchData = async () => {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=${city}&days=5&aqi=no&alerts=no&lang=vi`
        );
        setSearchWeather(response.data);
      };
      if (city != null) featchData();
    } catch (error) {
      console.log(error);
    }
  }, [city]);
  const date = [0, 1, 2];
  const currenDate = new Date();

  const time = moment().get("hour");
  return (
    <div className="bg-slate-400 w-screen h-screen flex justify-center items-center">
      
      <div className="screen bg-[url('/img/background.jpg')] border-solid border-8 relative border-black rounded-3xl w-[360px] h-[680px] overflow-y-auto text-white ">
        <main>
          <Header/>
        </main>
    <div className="mx-4 mt-4">
      <div className="flex justify-between items-center p-2">
        <div className="flex gap-2">
          <div className="">
            {searchWeather && searchWeather.location.name}
          </div>
        </div>
       
      </div>
      <div className=" flex justify-center items-center mb-5">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter") setCity(search);
          }}
          className="w-[100%] px-2 py-1 rounded mr-[-20px] text-[14px] outline-0 text-slate-900"
          placeholder="Tìm tên thành phố/sân bay"
          required
        />
        <button
          className="py-1 text-slate-600"
          onClick={() => {
            setCity(search);
          }}
        >
        <FaSearch />
        </button>
      </div>
      <div>
        {searchWeather &&
          date.map((x) => {
            return (
              <div key={x} className="bg-slate-900 bg-opacity-50 px-8 py-2 mt-2 rounded-xl ">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="text-[30px] font-medium mr-[-15px]">
                      {searchWeather &&
                        (time > 5 && time < 18
                          ? searchWeather.forecast.forecastday[x].day.maxtemp_c.toFixed(0)
                          : searchWeather.forecast.forecastday[x].day.mintemp_c.toFixed(0))} ℃
                    </div>
                  </div>
                  <div>
                    {searchWeather && (
                      <img
                        src={searchWeather.forecast.forecastday[x].day.condition.icon}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[14px]">
                    Ngày {currenDate.getDate() + x}
                  </div>
                  <div className="text-[14px]">
                    {searchWeather && searchWeather.forecast.forecastday[x].day.condition.text}
                  </div>
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

export default Search;