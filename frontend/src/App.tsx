import React, { useEffect } from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './routes/route';
 import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase/firebase.config';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './features/candidate/candidateSlice';



function App() {
  const dispatch = useDispatch()
 useEffect(() => {
  onAuthStateChanged(auth, async(user) => {
    if(user){
      const res = await fetch(`http://localhost:5000/currentUser/${user?.email}`)
      const data = await res.json()
      dispatch(setCurrentUser(data?.user))
    }
  })
 }, [dispatch])

  return (
        <div className='w-[1400px] mx-auto bg-slate-100'>
            <RouterProvider router={router} />
            <Toaster />
        </div>
  );
}

export default App;
