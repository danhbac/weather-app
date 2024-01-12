import { MdViewWeek, MdHome,MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="flex justify-between text-2xl bg-slate-700 flex-1 p-2 ">
  
       <Link to={"/weather-app/days"} className="w-8 h-8 flex justify-center items-center hover:bg-slate-800 cursor-pointer rounded-full"> <MdViewWeek /></Link>
        <Link to={"/weather-app"} className="w-8 h-8 flex justify-center items-center hover:bg-slate-800 cursor-pointer rounded-full"> <MdHome /></Link>
        <div className="w-8 h-8 flex justify-center items-center hover:bg-slate-800 cursor-pointer rounded-full"><MdSearch /></div>
    </div>
  )
}

export default Footer

