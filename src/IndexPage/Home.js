
import Styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate()

  return (
    <>
      <div style={{ overflowy: "auto" }}>
        <div className={Styles.maincontainer}>
          <div className={Styles.toaligncenter}>
            <div className={Styles.headingtext}>
              <h3>Holidays in All Ways</h3>
              <p>Gifting,Hosting,Decorating. We got everything in one Place</p>
            </div>
          </div>
        </div>
        <div className={Styles.categories}>
          <h2>CATEGORIES</h2>
          <p>
            Here Some of our most new arrivals products that people are in love
            with
          </p>
        </div>

        <div className={Styles.categoryitems}>
          <div
            className={Styles.imagefirst}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={Styles.first}>
              <p>FASHION/SKINCARE</p>
              <button onClick={()=>navigate('/fashion')}>SHOP NOW</button>
            </div>
          </div>
          <div
            className={Styles.imagesecond}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={Styles.first}>
              <p>ACCESSORIES/ELECTRONICS</p>
              <button onClick={()=>navigate('/accesories')}>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

{
  /* <img src='https://m.media-amazon.com/images/I/71SNEa-l3xL._SY741_.jpg' loading='lazy' alt='Fashoin image'/> */
}
