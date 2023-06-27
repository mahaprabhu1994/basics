import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Error from './Error';
import Filter from './Filter_Values/Filter';
import Cards from './NestedRoutes_With_Filters/Cards';
import NestedRoute from './NestedRoutes_With_Filters/NestedRoute';
import UserList from './NestedRoutes_With_Filters/UserList';
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
        {/* <Route path='/' element={<Parent />} /> */}
        <Route path='*' element={<Error />} />
        <Route path='/' element={<NestedRoute />} />
        <Route path='userlist' element={<UserList />} />
        <Route path='userlist/:productid' element={<Cards />} />
        {/* <Route path='filter2' element={<SearchBox />} />
        <Route path='main' element={<Main />} /> */}
        <Route path='filter' element={<Filter />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App