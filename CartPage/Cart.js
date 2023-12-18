import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Data from "../Data.json";
import Styles from './Cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {

  let [aditionalItems, setadditionalItems] = useState();
  let [cartProducts,setCartProducts] = useState()
  let [total,setTotal]=useState(0)
  let [cartChanged,setCartChanged] = useState(false)
  let [addedItems,setaddItems] = useState(false)



  let navigate = useNavigate()



  var mayLikeItems = () => {
    var shuffledProducts = [...Data].sort(() => Math.random() - 0.5);
    var selectedProducts = shuffledProducts.slice(0, 3);
    setadditionalItems(selectedProducts);
  };

  const removeItem =(itemId)=>{
    var removed = cartProducts.filter((item)=>item.id !== itemId)
    setCartProducts(removed)
    localStorage.setItem('cart',JSON.stringify(removed))
    UpdateTotalPrice()
    setCartChanged(true)
  }

  var UpdateTotalPrice =()=>{
    if(cartProducts && cartProducts.length > 0){
      var totalvalue = cartProducts.reduce((acc,cur)=>{
        return acc + cur.price
      },0)
      setTotal(totalvalue)
    }else{
      setTotal(0)
    }
   }


   const updatedCartProducts=()=>{
     var cartitems = JSON.parse(localStorage.getItem('cart')) || []
     setCartProducts(cartitems)
     setaddItems(true)
   }

   const placeOrder =()=>{
    if(cartProducts.length <=0){
      alert('Please Add Iems to Cart Before placing Orders !!!!')
    }else{
      navigate('/billingdetails')
    }
   }

   useEffect(() => {
    mayLikeItems();
    updatedCartProducts();
    setCartChanged(false);
  }, [cartChanged, addedItems]); 

  useEffect(() => {
    // Update total price when cartProducts or addedItems change
    UpdateTotalPrice();
    setaddItems(false);
  }, [cartProducts, addedItems]);
  return (
    <>
<div className={Styles.cartMain}>
<div className={Styles.cartWrapper}>
    {cartProducts && cartProducts.map((cart,i)=>{
      return <div className={Styles.cartItem} key={i}> 
      <div className={Styles.imgdetailparent}>
        <div className={Styles.imageContainer}>
          <img src={cart.thumbnail} alt={cart.title} loading='lazy'/>
        </div>
         <div className={Styles.titleContainer}>
          <h3>{cart.title}</h3>
          <h4>{cart.brand}</h4>
         </div>
         </div>
         <div className={Styles.btns}>
          <div className={Styles.removebtn}>
<button onClick={()=>removeItem(cart.id)}>RemoveItem <FontAwesomeIcon icon={faTrash}  /> </button>
</div>

         </div>

         </div>
    })}
<div className={Styles.total}>
  <h3><b>Total:Rs{total}</b></h3>
  <div className={Styles.placeorderBtn}>
<button onClick={placeOrder}>PlaceOrder<FontAwesomeIcon icon={faCartShopping}  /></button>
</div>

</div>

</div>
</div>
































      <div className={Styles.itemsmore}>
      <h2>You may also like</h2>
      <div className={Styles.aditionalimagesWrapper}>
        {aditionalItems &&
          aditionalItems.map((item, i) => {
            return <div className={Styles.aditionalproductswrapper} key={i}
             onClick={()=>navigate(`/details/${item.id}`)} >
                <img src={item.thumbnail} alt={item.title} loading='lazy'/>
                <p><b>{item.title}</b></p>
                <p><b style={{ color: "rgb(12, 233, 12)"}}>Rs{item.price}</b><span style={{opacity:'0.5',marginLeft:'10px'}}><s><b>Rs{item.price}</b></s></span></p>
            </div>;
          })}
          </div>
      </div>
      </>
  )
}

export default Cart
