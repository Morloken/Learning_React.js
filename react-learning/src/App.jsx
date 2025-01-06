import React from 'react'

import { //added
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JonListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter(//added
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>

      <Route index element ={<HomePage/>} />

    </Route>
    
))

const App = () => {
  return <RouterProvider router={router} />



   /*{/* <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JonListings />
    <ViewAllJobs /> 
    </> */
  //}
  
}

export default App;
