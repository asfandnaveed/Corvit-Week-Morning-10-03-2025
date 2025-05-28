import { useEffect, useState } from 'react';
import './App.css';
import Register from './components/Register';
import Chat from './components/Chat';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';


function App() {

  const[user , setUser]= useState(null);

  useEffect(()=>{

    const result = onAuthStateChanged(auth,(currentUser)=>{

      if(currentUser){
        setUser(currentUser);
      }else{
        setUser(null);
      }

    });

  },[]);

  


  return (
   <div>
    {user ? (<Chat />) : (<div><Register /></div>)}
    
   </div>
  );
}

export default App;
