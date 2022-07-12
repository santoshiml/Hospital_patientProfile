import React from 'react'

export default function Cartinfo() {
  return (
    <div className="cartinfo"><br/>
        <h5>Cart Details</h5><br/>
        <p>Eye's Checkup <spam style={{ marginLeft: '7.5rem' }}>$1000</spam></p>
        <p style={{fontSize:"10px", marginTop:"-17px"}}>Quantity X 2</p>
        <p>Regular Checkup <spam style={{ marginLeft: '6.5rem' }}>$10</spam></p>
        <p style={{fontSize:"10px", marginTop:"-17px"}}>Quantity X 1</p><br/><hr style={{width:'282px'}}/>
        <b><p>CART TOTAL <spam style={{ marginLeft: '7.5rem' }}>$1010</spam></p></b>

        </div>
  )
}

