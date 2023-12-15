import React ,{ useState }from 'react'
import { NavLink,} from 'react-router-dom'
import Styles from './Navbar.module.css'
import {
  faBars,
  faCaretDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames'

function Navbar() {
let [dropDown,setDropDown] = useState(false)

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
    activeclassname='active'
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
      <span className={Styles.cartItems}>0</span>
      </NavLink>
      
     </div>
     <FontAwesomeIcon onClick={()=>setDropDown(!dropDown)} className={Styles.bars} icon={faBars}/>
    </div>
    </>
  )
}

export default Navbar
