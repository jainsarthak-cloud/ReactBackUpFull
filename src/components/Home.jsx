// import React, { useContext } from 'react'

import { useSelector } from "react-redux"

// import { MyStore } from '../context/MyContext'

const Home = () => {
    
    // let { isLight } = useContext(MyStore)
    let { theme: isLight } = useSelector((state) => state.theme.value)

  return (
    <div className={isLight ?'text-2xl font-semibold flex flex-col justify-around items-center bg-black text-white h-[85%]' : 'flex flex-col text-2xl font-semibold justify-around items-center bg-white text-black h-[85%]'}>
        <h1>Home</h1>
        <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Eius quos quod soluta dolorum voluptatem repudiandae consequuntur suscipit voluptatibus dolor adipisci.</p>
    </div>
  )
}

export default Home