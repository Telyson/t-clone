import React from 'react'
import Section from './Section'
import img3 from '../images/model-3.jpg'
import imgy from '../images/model-y.jpg'
import imgs from '../images/model-s.jpg'
import imgx from '../images/model-x.jpg'
import imgpanel from '../images/solar-panel.jpg'
import imgroof from '../images/solar-roof.jpg'
import imgacc from '../images/accessories.jpg'

function Home() {
  return (
    <div>

        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg= {img3}
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg= {imgy}
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Model s"
            description="Order Online for Touchless Delivery"
            backgroundImg= {imgs}
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg= {imgx}
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            backgroundImg= {imgpanel}
            leftBtnTxt= "Order Now"
            rightBtnTxt= "Learn More"
        />

        <Section 
            title="Solar Roof"
            description="Produce Clean Energy
            From Your Roof"
            backgroundImg= {imgroof}
            leftBtnTxt= "Order Now"
            rightBtnTxt= "Learn More"
        />

          <Section 
            title="Accessories"
            // description="Order Online for Touchless Delivery"
            backgroundImg= {imgacc}
            leftBtnTxt= "Shop Now"
            // rightBtnTxt= "Existing Inventory"
        />
    </div>
  )
}

export default Home
