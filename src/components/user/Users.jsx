import {useSelector,useDispatch} from 'react-redux'
import { deleteUser } from '../../feature/user/userSlice'

const Users = () => {
    const usersList = useSelector(state=>state.utilisateur.users)//pointe sure touts les state de slice existant
    const dispatch = useDispatch()//pour execute les action
  return (
    <>
    <h1>Liste of users</h1>
    {usersList.map(user=>(
        <div key={user.id}>
            <h2>{user.name}</h2>
            <button onClick={() => dispatch(deleteUser(user.id))}>delete</button>
            {/* <button onClick={() => dispatch({type:"user/deleteUser",payload:user.id})}>delete</button> */}
        </div>
    ))}
    </>
  )
}

export default Users