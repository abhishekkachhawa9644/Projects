import React, { useContext } from 'react'
import WallCraftersContext from '../Context/WallCraftersContext'

const Logo = () => {
  const { setquery } = useContext(WallCraftersContext)
  return (
    <div className='logo'>
      <span>Wall Crafters</span>
      <input type='text'  onChange={(e)=>setquery(e.target.value)} className='form-control'></input>
      
    </div>
  )
}

export default Logo
