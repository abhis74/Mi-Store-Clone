import React from 'react'
import {Link} from "react-router-dom"
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className="HotAccessorieLink" to= "/music">Music Store</Link>
        <Link className="HotAccessorieLink" to= "/smartDevice">Smart Devices</Link>
        <Link className="HotAccessorieLink" to= "/home">Home</Link>
        <Link className="HotAccessorieLink" to= "/lifeStyle">LifeStyle</Link>
        <Link className="HotAccessorieLink" to= "/mobileAccessories">Mobile Accessories</Link>
      
    </div>
  )
}

export default HotAccessoriesMenu
