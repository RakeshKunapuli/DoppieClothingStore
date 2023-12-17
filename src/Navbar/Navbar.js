import React ,{ useCallback, useEffect, useState }from 'react'
import { NavLink,} from 'react-router-dom'
import Styles from './Navbar.module.css'
import {
  faBars,
  faCaretDown,
  faCartShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames'

function Navbar() {
let [dropDown,setDropDown] = useState(false)
const [count, setCount] = useState(0);

const updateCount = useCallback(() => {
  try {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (Array.isArray(cartItems)) {
      setCount(cartItems.length);
    } else {
      console.error("Invalid cart data format: Not an array");
    }
  } catch (error) {
    console.error("Error parsing cart data from localStorage", error);
  }
}, []);

useEffect(() => {
  updateCount();
}, []); // Run the effect on component mount

useEffect(() => {
  // Listen for storage changes in other tabs/windows
  const handleStorageChange = () => {
    updateCount();
  };

  window.addEventListener('storage', handleStorageChange);
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, [updateCount]);

const handleResponsiveNav =useCallback(()=>{
  setDropDown(!dropDown)
},[dropDown])

  return (
    <>
    <div className={Styles.navbarmain}>
      <div className={Styles.Logo}>
<p className={Styles.logo}>DOPPIE</p>
      </div>
      <div className={classNames(Styles.navbarLinks, Styles.active, { [Styles.show]: dropDown })}>
      <div>
    <NavLink
    activeclassname='active'
    className={Styles.navlinks}
     to={'/'}>Home<FontAwesomeIcon className={Styles.Icon} icon={faCaretDown}/></NavLink>
     </div>
      <div>
    <NavLink
    a ctiveclassname='active'
    className={Styles.navlinks}
     to={'/fashion'}>FASHION<FontAwesomeIcon className={Styles.Icon} icon={faCaretDown}/></NavLink>
     </div>
      <div>
    <NavLink
    activeclassname='active'
    className={Styles.navlinks}
     to={'/accesories'}>Accesories<FontAwesomeIcon className={Styles.Icon} icon={faCaretDown}/></NavLink>
     </div>
     </div>

     <div>
      <NavLink to={'/cart'}>
      <FontAwesomeIcon style={{color:'black'}} icon={faCartShopping}/>
      <span className={Styles.cartItems}>{count}</span>
      </NavLink>
      
     </div>
     <FontAwesomeIcon onClick={handleResponsiveNav} className={Styles.bars} icon={dropDown ? faClose: faBars}/>

    </div>
    </>
  )
}

export default Navbar
