import React, { useState } from 'react';
import Styles from './enterDetails.module.css';
import { useNavigate } from 'react-router-dom';

function Enterdetails() {
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    postalcode: '',
    country: '',
  });

  const [contactInfo, setContactInfo] = useState({
    email: '',
    mobile: '',
  });

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);

  const proceedOrder = () => {
    // Check if any of the required fields are empty
    if (
      Object.values(shippingInfo).some(value => value.length < 1) ||
      contactInfo.email.length < 1 ||
      contactInfo.mobile.length < 1
    ) {
      alert('Please fill in all the required fields.');
    } else {
      alert('Yay!!!!! Your Order Have Been placed. Thank you For Shopping With Us.');
      setTimeout(() => {
        console.log(localStorage.clear());
        navigate('/');
      }, 0);
    }
  };

  return (
    <>
      <div className={Styles.billingmain}>
        <h1>Checkout</h1>
        <p>Shipping & Billing</p>
        <div className={Styles.detailinfo}>
          <h3>Enter shipping address</h3>
          <div className={Styles.detailInputs}>
            <input
              type="text"
              name="firstname"
              placeholder="  FIRST NAME*"
              value={shippingInfo.firstname}
              onChange={(e) => setShippingInfo({ ...shippingInfo, firstname: e.target.value })}
            />
            <input
              type="text"
              name="middlename"
              placeholder="  MIDDLE NAME"
              value={shippingInfo.middlename}
              onChange={(e) => setShippingInfo({ ...shippingInfo, middlename: e.target.value })}
            />
            <input
              type="text"
              name="lastname"
              placeholder="  LAST NAME*"
              value={shippingInfo.lastname}
              onChange={(e) => setShippingInfo({ ...shippingInfo, lastname: e.target.value })}
            />
            <input
              type="text"
              name="address"
              placeholder="  ADDRESS/STREET NAME*"
              value={shippingInfo.address}
              onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
            />
            <input
              type="text"
              name="city"
              placeholder="  CITY*"
              value={shippingInfo.city}
              onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
            />
            <input
              type="text"
              name="state"
              placeholder="  STATE*"
              value={shippingInfo.state}
              onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
            />
            <input
              type="text"
              name="postalcode"
              placeholder="  POSTAL CODE"
              value={shippingInfo.postalcode}
              onChange={(e) => setShippingInfo({ ...shippingInfo, postalcode: e.target.value })}
            />
            <input
              type="text"
              name="country"
              placeholder="  COUNTRY"
              value={shippingInfo.country}
              onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
            />
          </div>
        </div>
        <h3>Enter contact Information</h3>
        <div className={Styles.contactinfo}>
          <input
            type="text"
            placeholder="   EMAIL ADDRESS"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="   MOBILE NO"
            value={contactInfo.mobile}
            onChange={(e) => setContactInfo({ ...contactInfo, mobile: e.target.value })}
          />
        </div>

        <p>Enter Billing address</p>
        <div style={{ marginTop: '40px' }}>
          <label htmlFor="checkbox"></label>
          <input
            type="checkbox"
            id="checkbox"
            checked={billingSameAsShipping}
            onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
          />
          Shipping and billing address are the Same. <br />
          <button className={Styles.proced} onClick={proceedOrder}>
            Proceed With Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Enterdetails;
