import React from 'react'
import {Link} from 'react-router-dom'

const BlogList = ({blogs,title})=>{
  return (
    <div>
        <h2>{title}</h2>
        {blogs.map(blog =>(<div className='blog-preview' key={blog.id}>
            <Link to={`/blog/${blog.id}`}></Link>
            <h2>{blog.title}</h2>
            <p>Written By..{blog.author}</p>
        </div>
        )) }
    </div>
  )
}

export default BlogList