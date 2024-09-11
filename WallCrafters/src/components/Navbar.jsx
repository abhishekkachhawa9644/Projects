import React, { useContext } from 'react'
import WallCraftersContext from '../Context/WallCraftersContext'

const Navbar = () => {
  const { fetchDataByCategory } = useContext(WallCraftersContext)
  return (
    <div className='container text-center my-3'>
      <button onClick={()=>fetchDataByCategory('backgrounds')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Backgrounds</button>
<button onClick={()=>fetchDataByCategory('fasion')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Fasion</button>
<button onClick={()=>fetchDataByCategory('nature')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Nature</button>
<button onClick={()=>fetchDataByCategory('science')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Science</button>
<button onClick={()=>fetchDataByCategory('education')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Education</button>
<button onClick={()=>fetchDataByCategory('feelings')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Feelings</button>
<button onClick={()=>fetchDataByCategory('health')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Health</button>
<button onClick={()=>fetchDataByCategory('people')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">People</button>

<button onClick={()=>fetchDataByCategory('religion')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Religion</button>
<button onClick={()=>fetchDataByCategory('places')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Places</button>
<button onClick={()=>fetchDataByCategory('animals')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Animals</button>
<button onClick={()=>fetchDataByCategory('industry')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Industry</button>
<button onClick={()=>fetchDataByCategory('computer')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Computer</button>
<button onClick={()=>fetchDataByCategory('food')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Food</button>
<button onClick={()=>fetchDataByCategory('sports')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Sports</button>
<button onClick={()=>fetchDataByCategory('transportation')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Transportation</button>
<button onClick={()=>fetchDataByCategory('travel')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Travel</button>
<button onClick={()=>fetchDataByCategory('building')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Buildings</button>
<button onClick={()=>fetchDataByCategory('business')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Business</button>
<button onClick={()=>fetchDataByCategory('music')} type="button" className=" btn btn-outline-dark mx-3 catbuttons">Music</button>

    </div>
  )
}

export default Navbar
