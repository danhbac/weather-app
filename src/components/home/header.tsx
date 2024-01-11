import { FiTarget } from "react-icons/fi";
import { BsBarChartFill, BsBatteryFull } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";



const Header = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
  return (
    <div className="flex justify-between px-5 py-2 items-center">
        <div className="w-16">{time}</div>
        <div className="bg-black w-28 h-6 text-gray-900 rounded-xl flex justify-end items-center pr-2"><FiTarget /></div>
        <div className="flex w-16 justify-between items-center">
            <div><BsBarChartFill /></div>
            <div><FaWifi /></div>
            <div className="text-xl"><BsBatteryFull /></div>
        </div>
    </div>
  )
}

export default Header