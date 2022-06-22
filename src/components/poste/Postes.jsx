
import { useEffect } from 'react'
import { getPostes } from '../../feature/post/postSlice'
import {useDispatch,useSelector} from 'react-redux'


const Postes = () => {
    const dispatch = useDispatch()
    const postsList =  useSelector(state=>state.post.posts)
    const loading =  useSelector(state=>state.post.loading)
    useEffect(()=>{
        dispatch(getPostes())
    },[])

  return (
    <>
    <h1>Liste of Postes</h1>
    {loading ? "Loading ..." : postsList.map(post=>(
        <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    ))}
    </>
  )
}

export default Postes