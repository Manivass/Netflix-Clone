import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
const Browse = () => {
  const store = useSelector((store) => store);
  console.log(store);
  
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse