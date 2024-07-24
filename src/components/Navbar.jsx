import React, { useState } from 'react'
import SearchBar from './searchbar/SearchBar'
import ProfileInfo from './cards/ProfileInfo'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [seachQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {}
  const onClearSearch = () => {
    setSearchQuery("")
  }
  const onLogout = () => {
    navigate("/login")

  }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <Link to={'/'}>
      
      <h2 className='text-xl font-medium text-black py-2'>
        <span className='text-slate-500'>Good </span>
        <span className='text-slate-900'>Notes</span>
      </h2>
      </Link>

      <SearchBar value={seachQuery}
      onchange={({target}) => setSearchQuery(target.value)}
      handleSearch={handleSearch}
      onClearSearch={onClearSearch}
      
      />
      <ProfileInfo onLogout={onLogout}/>
      
    </div>
  )
}
