import React from 'react';
import './index.css';
import Button from '../../components/Button/Button';

function FilterContent() {
    return (
        <>
        <div className="filtercontent_div">
         <div className="content_align">
          <div className="content_border">
          <div className="buttonspace">
          <Button buttonStyle="btn--filter--outline" buttonSize="btn--filter" name="Filters"/>
          </div>
          <div className="buttonspace">
          <Button buttonStyle="btn--filter--outline" buttonSize="btn--filter" name="Rating :4.0+"/>
          </div>
          <div className="buttonspace">
          <Button buttonStyle="btn--filter--outline" buttonSize="btn--filter" name="Safe and Hygienic"/>
          </div>
          <div className="buttonspace">
          <Button buttonStyle="btn--filter--outline" buttonSize="btn--filter" name="Pure veg"/>
          </div>
          <div className="buttonspace">
          <Button buttonStyle="btn--filter--outline" buttonSize="btn--filter" name="Delivery Time"/>
          </div>
          <div className="buttonspace">
          <Button buttonStyle="btn--filter--outline" buttonSize="btn--filter" name="Great Offers"/>
          </div>
          </div>
         </div>
        </div>
        <div className="bottomcontent"></div>
        <div className="bottomcontent">
        <h1 className="cardheading">
            Delivery Restaurants in Mumbai
        </h1>
        </div>
        </>
    )
}

export default FilterContent;