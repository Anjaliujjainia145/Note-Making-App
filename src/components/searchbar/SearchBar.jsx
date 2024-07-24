import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import {IoMdClose} from "react-icons/io"


export default function SearchBar({handleSearch, value, onchange,onClearSearch  }) {
  return (
    <div className='w-50  sm:w-60 md:w-80 flex items-center px-4 bg-slate-200 rounded-md'>
      <input type="text"
      placeholder='search Notes...'
      className='w-full text-s py-[11px] outline-none bg-transparent'
      value={value}
      onChange={onchange}

       />

       {value && (

       
       <IoMdClose className='text-slate-500 text-xl hover:text-black mr-3'
       onClick={onClearSearch}
       />
       )}



       <FaMagnifyingGlass className='text-slate-500 cursor-pointer text-xl hover:text-black mr-3'
       onClick={handleSearch} 
       />


      
    </div>
  )
}
