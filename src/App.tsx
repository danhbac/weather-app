
import './App.css'
import Weather from './components/home/weather.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Days from './components/home/days.tsx';
import Search from './components/home/search.tsx';

function App() {
  return (
      <BrowserRouter>
         <Routes>
          <Route index element={<Weather />} />
            <Route path="/weather-app" element={<Weather />} />
            <Route path="/weather-app/days" element={<Days />} />
            <Route path="/weather-app/search" element={<Search />} />
         </Routes>
      </BrowserRouter>
  )
}

export default App
