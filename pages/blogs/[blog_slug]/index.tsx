import { useRouter } from 'next/router'
import React from 'react'

export default function BlogSlug() {
    const router = useRouter()
    console.log(router.query.blog_slug);
    
  return (
    <div>This is blog {router.query.blog_slug}</div>
  )
}
