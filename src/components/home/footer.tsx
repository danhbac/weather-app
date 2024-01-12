import { MdViewWeek, MdHome,MdSearch } from "react-icons/md";


const Footer = () => {
  return (
    <div className="flex justify-between text-2xl bg-slate-700 flex-1 p-2 ">
  
       <a href="/weather-app/days" className="w-8 h-8 flex justify-center items-center hover:bg-slate-800 cursor-pointer rounded-full"> <MdViewWeek /></a>
        <a href="/weather-app" className="w-8 h-8 flex justify-center items-center hover:bg-slate-800 cursor-pointer rounded-full"> <MdHome /></a>
        <div className="w-8 h-8 flex justify-center items-center hover:bg-slate-800 cursor-pointer rounded-full"><MdSearch /></div>
    </div>
  )
}

export default Footer

