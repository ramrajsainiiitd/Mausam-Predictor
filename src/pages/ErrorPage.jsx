import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'

export default function ErrorPage() {
  const[searchError, setSearchError] = useContext(MyContext);
  console.log(searchError);
  return (
    <div>
      <h2 style={{textAlign:'center'}} >Error 404</h2>
      <p style={{textAlign:'center'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quaerat quam rem, quas temporibus reiciendis alias explicabo iure, perspiciatis corrupti aliquid est ipsum ad amet facere. Minima ut asperiores quam!</p>
    </div>
  )
}
