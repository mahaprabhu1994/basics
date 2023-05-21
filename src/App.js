import React from 'react'

import Home from './pages/Home';
import Details from './pages/Details';
import Reports from './pages/Reports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Address from './Components/Address';
import BasicDetails from './Components/BasicDetails';
import MFplans from './Components/MFplans';
import Navbar2 from './ContextAPI/actual-2/Navbar2';
import Parents from './ContextAPI/actual-1/Parents';
import Create from './CRUD/Create';
import Edit from './CRUD/Edit';
// import Parent from './ContextAPI/Test/Parent';
import Parent from './ContextAPI/Practical/Parent';
import NestedForm from './Nested Objects/NestedObj';
import MultiStepForm from './Multi_step_Form/MultiStepForm';
import Form from './Multi_Step_form_with_Nested_Obj/Form';
import SimpleState_action from './UseReducer/SimpleState_action';
import ComplexState from './UseReducer/ComplexState';


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
        <Route path='/multistepnested' element={<Form />} />
        <Route path='/contaxtpractical' element={<Parent />} />
        <Route path='/reducer' element={<SimpleState_action />} />
        <Route path='/reducer_comp' element={<ComplexState />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App