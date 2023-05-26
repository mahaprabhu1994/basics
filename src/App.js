import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Parent from './useReducer_with_useContext/Parent';
// import Parent from './ContextAPI/Test/Parent';
// import Parent from './ContextAPI/Practical/Parent';
// import ComplexState from './UseReducer/ComplexState';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/details' element={<Details />} > */}
        {/* <Route index element={<BasicDetails />} /> */}
        {/* <Route path='basicdetails' element={<BasicDetails />} /> */}
        {/* <Route path='address' element={<Address />} /> */}
        {/* <Route path='mfplans' element={<MFplans />} /> */}
        {/* <Route path='/reports' element={<Reports />} /> */}
        {/* <Route path='/contextapistarter' element={<Navbar2 />} /> */}
        {/* <Route path='/contextapi' element={<Parents />} /> */}
        {/* <Route path='/crud' element={<Create />} /> */}
        {/* <Route path='/edit' element={<Edit />} /> */}
        {/* <Route path='/contaxtapi2' element={<Parent />} /> */}
        {/* <Route path='/nestedobject' element={<NestedForm />} /> */}
        {/* <Route path='/multistep' element={<MultiStepForm />} /> */}
        {/* <Route path='/multistepnested' element={<Form />} /> */}
        {/* <Route path='/contaxtpractical' element={<Parent />} /> */}
        {/* <Route path='/reducer' element={<SimpleState_action />} /> */}
        {/* <Route path='/reducer_comp' element={<ComplexState />} /> */}
        {/* <Route path='/simplecalc' element={<SimpleCalculate />} /> */}
        {/* <Route path='/multiplereducer' element={<MultipleReducer />} /> */}
        {/* <Route path='/slidepane' element={<SlidingPanes />} /> */}
        <Route path='/' element={<Parent />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App