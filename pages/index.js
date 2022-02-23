import { useSession, signIn, signOut } from "next-auth/react"
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useQuery } from 'react-query'
//import axios from 'axios'

export const getStaticProps =async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const data=await res.json();
  //console.log(data);
  return{
    props:{connections:data}
  }
}
export default function Home({connections}) {
  const { data: session } = useSession();
  console.log(session);
  
  
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <h4>Email: {session.user.email}</h4>
         
      
        <div>
          {connections.map(con => (
            <div key={con.if}>
              {con.name}
            </div>
          ))}
        </div>
  
        
        <button className="h-10 w-52 px-5 mt-2  rounded-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline 
        hover:bg-blue-700" onClick={() => signOut()}>Sign out</button>
        
      </>
    )
  }
  return (
    <>
   

     <div className=' w-full bg-gradient-to-r from-blue-300 via-purple-100 to-blue-300 block
      flex flex-col items-center  justify-center content-center h-screen'>
        
        <div className='flex flex-col items-center bg-zinc-300 max-w-2xl h-1/2 justify-center content-center rounded-md border-black 
        contrast-100 opacity-90' >
         <h1 className='text-xl antialiased font-bold flex mt-1'>Login Page</h1>
      <div className='px-4 ml-4 mr-4 flex items-center border-1
        bg-white shadow-sm rounded-full mt-11'>
        <div className='p-1'>
          <FontAwesomeIcon icon={faUser} />

        </div>
        <input className='flex rounded-full py-2 px-6 text-gray-800 leading-tight focus:outline-none' 
        name='username'
        type="text"  placeholder='Username'></input> 
      </div>

       <div className='px-4 ml-4 mr-4 flex items-center border-1
      bg-white shadow-sm rounded-full mt-2'>
        <div className='p-1'>
          <FontAwesomeIcon icon={faLock} />
       </div>
        <input className=' flex rounded-full py-2 px-6 text-gray-800 leading-tight focus:outline-none' type="password" name='password' 
        placeholder='Password'></input> 
       
      </div>
      
      
        <input name='submit' className="h-10 w-52 px-5 mt-2  rounded-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline 
        hover:bg-blue-700" type="submit"></input> 
      <button className="h-10 w-52 px-5 mt-2 mb-4  rounded-full text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline 
        hover:bg-blue-700" onClick={() => signIn()}>Sign in with GOOGLE </button>
      </div>
      </div>
    </>
  )
}