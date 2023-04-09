import { useRouter } from 'next/router'
import React from 'react'

function Home() {
  const router = useRouter()
  return (
    <>
    <h1>Home Page</h1>
    <button onClick={()=>router.push({pathname:"about" , query:{
      name:"abdullah",
      email:"mabdullah2037@gmail.com"
    }})}>Blog</button>
    </>
  )
}

export default Home