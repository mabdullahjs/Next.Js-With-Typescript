import { useRouter } from 'next/router'
import React from 'react'

function About() {
  const router = useRouter()
  console.log(router.query);
  
  return (
    <h1>About page</h1>
  )
}

export default About