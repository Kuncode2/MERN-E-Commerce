import React from 'react'
import './DescripationBox.css'
const DescripationBox = () => {
  return (
    <div className='descripationbox'>
      <div className="descripationbox-navigator">
        <div className="descripationbox-nav-box">Descripation</div>
        <div className="descripationbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descripationbox-descripation">
        <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the 
            internet serves as a virtual marketplace where businesses and individual showcase their product, interace with 
            cutomers, and conducted transactions without the need for a physical presence. E-commerce website have gained
            immense popularity due to their convenical accessibility, and the global reach they offer . 
        </p>
        <p>E-commerce webstes typically display product or servies adetailed descripation, images, prices, and any available var 
            (e.g., sizes, colors). Each product usually has its own dedicated with relevent information.
        </p>
      </div>
    </div>
  )
}

export default DescripationBox
