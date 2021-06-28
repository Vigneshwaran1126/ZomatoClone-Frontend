import React from 'react'
import './subcategory.css';

const Subcategory=(props)=> {
    const {name,logo}=props
    return (
        <button className='tabdiv_one tabdiv_two' tabIndex="0" role="tab">
            <h2 className='text_one text_two' tabIndex="-1">
             <div className="icondiv">
              <div height="3rem" width="100%" className="imgdiv_one imgdiv_two">
                <div className='img_background'></div>
                <img alt="image" src={logo} className="category_image"/>
              </div>
             </div>
             <div className="category_text">{name}</div>
            </h2>
            <hr className="category_line"/>
        </button>
    )
}

export default Subcategory;
