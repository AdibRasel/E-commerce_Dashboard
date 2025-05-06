import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"


import Dashboard from './Pages/Dashboard/Dashboard'
import NotFound from './Utility/NotFound'
import Header from './Components/Header/Header'

function App() {
  return (
    <BrowserRouter>

    
      <Header />


      <Routes>
        {/* Page not found route */}
        <Route path="*" element={<NotFound />} />
        
        {/* Route Start  */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        
        {/* Route End */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
