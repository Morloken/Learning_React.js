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
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  //add new job
  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });

    return;
  };
  //delete job 
  const deleteJob = async (id) => {
    console.log('delete', id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });

    return;
  };

  //update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });

    return;
  }

  const router = createBrowserRouter(//added
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>

        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />                  {/*  :id is a dynamic parameter  */}
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />

        <Route path='*' element={<NotFoundPage />} />

      </Route>

    ))
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
