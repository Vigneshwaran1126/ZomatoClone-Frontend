import React from 'react';
import './Card.css';
import Data from '../../components/Data/Data.js';

function Card() {
    return (
        <div className="outercontainer">
         <div className="containerborder">
         {Data.map((props)=>{
            const{image,offer,hotelname,rating,deliveryreview,menu,price,time}=props;
            return(
          <div className="single_card">
                  <a href="" className="a_imagetag">
                  <div height="24.8rem" width="100%" className="imagedivone imagedivtwo">
                  <div className="div_animation"></div>
                  <img alt="Restaurant Card"
                  src={image} loading="lazy" className="cardimagediv"/>
                  </div>
                  <div className="offer_div">
                  <p className="offer">{offer}</p>
                  </div>
                  </a>
                  <a className="imagedetails">
                    <div className="cardtitlediv">
                     <p className="cardtitle">{hotelname}</p>
                    </div>
                    <div className="reviewdiv">
                     <section className="reviewsection">
                      <div className="reviewlayout">
                        <div className="stardiv">
                        <i className="starlayout stargap" size="18" color="#E23744"><svg xmlns="http://www.w3.org/2000/svg" fill="#E23744" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="rbbb40-0 ZGPg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"></path></svg></i>
                        <i className="starlayout stargap" size="18" color="#E23744"><svg xmlns="http://www.w3.org/2000/svg" fill="#E23744" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="rbbb40-0 ZGPg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"></path></svg></i>
                        <i className="starlayout stargap" size="18" color="#E23744"><svg xmlns="http://www.w3.org/2000/svg" fill="#E23744" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="rbbb40-0 ZGPg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"></path></svg></i>
                        <i className="starlayout stargap" size="18" color="#E23744"><svg xmlns="http://www.w3.org/2000/svg" fill="#E23744" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="rbbb40-0 ZGPg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"></path></svg></i>
                        <i className="starlayout" size="18" color="#E23744"><svg xmlns="http://www.w3.org/2000/svg" fill="#E23744" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="rbbb40-0 ZGPg"><linearGradient id="ckq3ql2ay01r13b6gxa5iysz9" x1="0" x2="100%" y1="0" y2="0"><stop offset="0" stop-color="#E23744"></stop><stop offset="10%" stop-color="#E23744"></stop><stop offset="11%" stop-color="#CFCFCF"></stop><stop offset="1" stop-color="#CFCFCF"></stop></linearGradient><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z" fill="url(#ckq3ql2ay01r13b6gxa5iysz9)"></path></svg></i>
                        </div>
                        <p className="rating">{rating}</p>
                      </div>
                      <div className="deliveryreview_div">
                        <p color="#9C9C9C" className="deliveryreview">{deliveryreview}</p>
                      </div>
                     </section>
                    </div>
                    <p className="shopmenu">{menu}</p>
                    <p className="p_amount">
                        <span className="amounts">{price}</span>
                        <span className="dot_inbetween"></span>
                        {time}
                    </p>
                  </a>
          </div>
         
            )
        }
        )
        }
        </div>
        </div>
    )
}

export default Card;
