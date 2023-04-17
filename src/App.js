import React from 'react'

import Home from './pages/Home';
import Details from './pages/Details';
import Reports from './pages/Reports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Address from './Components/Address';
import BasicDetails from './Components/BasicDetails';
import MFplans from './Components/MFplans';
import Navbar2 from './ContextAPI/starter/Navbar2';
import Parents from './ContextAPI/actual/Parents';
import Create from './CRUD/Create';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} >
          <Route index element={<BasicDetails />} />
          <Route path='basicdetails' element={<BasicDetails />} />
          <Route path='address' element={<Address />} />
          <Route path='mfplans' element={<MFplans />} />
        </Route>
        <Route path='/reports' element={<Reports />} />
        <Route path='/contextapistarter' element={<Navbar2 />} />
        <Route path='/contextapi' element={<Parents />} />
        <Route path='/crud' element={<Create />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App