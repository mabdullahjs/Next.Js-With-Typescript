import React from 'react'
import { useRouter } from 'next/router'

export default function CourseSlug() {
    const router = useRouter();
    const slug = router.query.course_slug;
    
  return (
    <h1>This is {slug} course</h1>
  )
}
