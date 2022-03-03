import {useParams, useHistory} from 'react-router-dom'
import useFetch from './useFeatch'


const BlogDetails = () => {
    const{id}= useParams()
    const{data:blog, error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const clickHandler = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{method='DELETE'}).then(()=> history.push('/'))
    }
  return (
    <div className='blog-details'>
        {isPending && <div>Loading...</div>}
        {error && <div>Error</div>}
        <article>
            <h2>{blog.title}</h2>
            <p>Writen By {blog.author}</p>
            <button onClick={clickHandler }>Delete</button>
        </article>
    </div>
  )
}

export default BlogDetails