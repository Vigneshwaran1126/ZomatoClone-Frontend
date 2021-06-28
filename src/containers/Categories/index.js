import React from 'react';
import './index.css';
import Subcategory from './subcategory';
import Uncoloured from './uncoloured';
import Delivery from '../../components/Images/delivery.png';
import Diningout from '../../components/Images/diningout.png';
import Nightlife from '../../components/Images/nightlife.png';
import Nutrition from '../../components/Images/nutrition.png';

function Category() {
    return (
        <div className='category_container'>
            <div className='category_div'>
             <div className='container_align'>
              <section className='category_section'>
               <section role='tablist' className='category_layout'>
                <Subcategory name="Delivery" logo={Delivery}/>
                <Uncoloured name="Dining Out" logo={Diningout}/>
                <Uncoloured name="Nightlife" logo={Nightlife}/>
                <Uncoloured name="Nutrition" logo={Nutrition}/>
               </section>
              </section>
             </div>
            </div>
        </div>
    )
}

export default Category;
