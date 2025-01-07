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
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage' ;
import JobPage, { jobLoader } from './pages/JobPage';

const router = createBrowserRouter(//added
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>

      <Route index element ={<HomePage/>} />
      <Route path='/jobs' element ={<JobsPage/>} />
      <Route path='/jobs/:id' element ={<JobPage/>} loader ={jobLoader} />                  {/*  :id is a dynamic parameter  */ }
      
      <Route path='*' element ={<NotFoundPage/>} />

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
