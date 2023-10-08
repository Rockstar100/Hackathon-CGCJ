import React from 'react'
import '../styles/partials/components/payment.css'
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <div>
<div className="container ">
  <header>
    <h1>Payment</h1>
    <p>Choose payment method</p>
  </header>
  <div id="payment-methods">
    <div className="methods">
      <i className="fas fa-credit-card fa-3x" />
        <span>Credit</span><span>Card</span>
    </div>
    <div className="methods">
      <i className="fab fa-paypal fa-3x" />
      <span>Pay</span><span>Pal</span>
    </div>
    <div className="methods">
      <i className="fab fa-amazon-pay fa-3x" />
        <span>UPI</span>
    </div>
  </div>
  <div id="info">
    <div className="billing-info">
      <h4>Billing info</h4>
      <div>
        <label htmlFor="full-name">Full name</label>
        <input type="text" id="full-name" placeholder="John Doe" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="407 Evergreen Rd." />
      </div>
      <div>
        <div>
          <label htmlFor="city">city</label>
          <input type="text" id="city" placeholder="Roseville" />
        </div>
        <div>
          <label htmlFor="zip-code">Zip code</label>
          <input type="text" id="zip-code" placeholder={95673} />
        </div>
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select id="country">
          <option value="IN">India</option>
          
        </select>
      </div>
    </div>
    <div className="card-info">
      <h4>Credit card info</h4>
      <div>
        <div>
          <label htmlFor="card-number">Card number</label>
          <input type="number" id="card-number" placeholder="1234   5678   3456   2456" />
        </div>
        <div>
          <p>Visa</p>
        </div>
      </div>
      <div>
        <label htmlFor="holder-name">Cardholder name</label>
        <input type="text" id="holder-name" placeholder="John Doe" />
      </div>
      <div>
        <label htmlFor="exp">Expire date</label>
        <input type="month" id="exp" defaultValue="2021-05" />
      </div>
      <div>
        <div>
          <label htmlFor="cvv">Cvv</label>
          <input type="text" id="cvv" placeholder={123} />
        </div>
      </div>
    </div>
    <Link to={`/`}>
     <input type="submit" defaultValue="Proceed" />
    </Link>
  </div>
</div>

    </div>
  )
}

export default Payment