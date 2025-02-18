import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync } from './store/reducers/counterSlice'


const App = () => {

  const {value} = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className='m-auto container mt-5 bg-red-100 p-10'>
      <h1 className='text-center font-bold text-3xl text-red-900 mb-5'>
        Counter: {value}
      </h1>

      <div className='text-center'>
        <button onClick={()=>dispatch(increment())} className='text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'>
          Increment
        </button>
        <button onClick={()=>dispatch(decrement())} className='mx-5 text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'>
          Decrement
        </button>
        <button onClick={()=>dispatch(incrementAsync(5))}  className='mx-5 text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2'>
          Increment By 5
        </button>
      </div>
    </div>
  )
}

export default App