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
import Edit from './CRUD/Edit';
import Parent from './ContextAPI/Test/Parent';
import NestedForm from './Nested Objects/NestedObj';
import MultiStepForm from './Multi_step_Form/MultiStepForm';



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
        <Route path='/edit' element={<Edit />} />
        <Route path='/contaxtapi2' element={<Parent />} />
        <Route path='/nestedobject' element={<NestedForm />} />
        <Route path='/multistep' element={<MultiStepForm />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App