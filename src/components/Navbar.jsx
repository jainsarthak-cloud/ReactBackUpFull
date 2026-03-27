// import React, { useContext } from 'react'
// import { MyStore } from '../context/MyContext'

import { useDispatch, useSelector } from "react-redux"
import { store } from "../app/store"
import {setTheme} from '../features/ThemeSlice'

const Navbar = () => {

    // let { isLight, setIsLight } = useContext(MyStore)
    let isLight = useSelector((state) => state.theme.value)
    console.log(isLight);
    

    let dispatch = useDispatch()

    return (
        <div className={isLight ? 'font-semibold cursor-pointer h-18 w-full bg-orange-500 text-white flex justify-around items-center' : 'font-semibold  cursor-pointer h-18 w-full bg-black shadow-2xl text-yellow-500 flex justify-around items-center'}>
            <div className='text-3xl'>LOGO</div>
            <button className='cursor-pointer py-3 px-6 bg-yellow-900 text-white rounded-xl transition active:scale-95 text-black' onClick={() => dispatch(setTheme())}>Toggle</button>
        </div>
    )
}

export default Navbar