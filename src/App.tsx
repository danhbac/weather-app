
import './App.css'
import Weather from './components/home/weather.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Days from './components/home/days.tsx';

const queryClient = new QueryClient();
function App() {

  return (
   
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <Routes>
         
            {/* / Trang chủ */}
            <Route  index element={<Weather />} />
            <Route path="/days" element={<Days />} />
           
         </Routes>
        
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
