import React from  'react'
import Styles from './Footer.module.css'


function Footer() {
  return (
    <>
    <div className={Styles.maincontainer}>
    <div className={Styles.footer1}>
      <h2>GET THE LATEST TRENDS FIRST</h2>
      <p style={{textTransform:'capitalize'}}> Stay ahead of the curve by staying informed about the latest trends</p>
      </div>
    <div className={Styles.footer2}>
      <h4>Community</h4>
      <div className={Styles.icons}>
<i className="fab fa-facebook-f fa-2x" style={{color: "#3b5998"}}></i>
<i className="fab fa-twitter fa-2x" style={{color: "#55acee"}}></i>
<i className="fab fa-google fa-2x" style={{color: "#dd4b39"}} ></i>
<i className="fab fa-instagram fa-2x" style={{color: "#ac2bac"}}></i>
<i className="fab fa-linkedin-in fa-2x" style={{color:"#0082ca"}}></i>
<i className="fab fa-pinterest fa-2x" style={{color: "#c61118"}}></i>
<i className="fab fa-youtube fa-2x" style={{color: "#ed302f"}}></i>
{/* <i className="fab fa-whatsapp fa-2x" style={{color: '#25d366'}}></i> */}
      </div>
      </div>

      <div className={Styles.footer3}>
<span>&#169;2023,DOPPIE</span>
<span>   /   </span>
<span>TERMS AND  CONDITIONS</span>
<span>   /   </span>
<span>PRIVACY POLICY</span>
      </div>
      </div>
    </>
  )
}

export default Footer
