import React from 'react'

export const Searchbar = ({setCity}) => {
  const [search, setSearch] = React.useState('')
  const handleSearch=(e)=>{
    e.preventDefault()
    setCity(search)
    setSearch("")
  }
  return (
    
    <div>

        <input className='mt-3 w-80 rounded p-2'
         type="text"
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         placeholder='Search City'/>
         
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded'
         onClick={handleSearch}>
          Search</button>

    </div>
  )
}
