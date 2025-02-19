import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userdelete } from '../store/reducers/userReducer';


const Users = () => {

  const { users } = useSelector((state) => state.userReducer);
  
  
  const dispatch = useDispatch();



  const DeleteHandler = (index) => {
    console.log(index)
    dispatch(userdelete(index));
  }

  
  return (
    <div className='m-auto  container p-10 mt-5 bg-red-100'>
      <h1 className='text-center text-3xl font-bold text-red-900'>
        UserList
      </h1>
      <ul>
      {users.map((user) => {
        return <li key = {user.id}>
          <h1>{user.name}{ " " }
            <span onClick={()=>DeleteHandler(user.index)} className='text-red-500 font-black cursor-pointer'>
              X
            </span>
          </h1> 
        </li>
      })}
      </ul>
    </div>
  )
}

export default Users