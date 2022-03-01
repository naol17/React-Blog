import React from 'react'
import BlogList from './BlogList'
import useFeatch from './useFeatch'

const Home = ()=> {

    const{data:blogs, isPending, error}= useFeatch('http://localhost:8000/')

  return (
    <div className='home'>Home
    {isPending && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    <BlogList blogs={blogs} title='All Blogs'></BlogList>
    </div>
  )
}

export default Home