import { useRouter } from 'next/router'
import React from 'react'

export default function Images() {
  const router = useRouter()
  const {blog_slug , image_id} = router.query
  return (
    <div>this is blog {blog_slug} and image {image_id}</div>
  )
}
