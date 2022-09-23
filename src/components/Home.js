import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>

        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg= "/images/model-3.jpg"
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg= "/images/model-y.jpg"
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Model s"
            description="Order Online for Touchless Delivery"
            backgroundImg= "/images/model-s.jpg"
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg= "/images/model-x.jpg"
            leftBtnTxt= "Custom Order"
            rightBtnTxt= "Existing Inventory"
        />

        <Section 
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            backgroundImg= "/images/solar-panel.jpg"
            leftBtnTxt= "Order Now"
            rightBtnTxt= "Learn More"
        />

        <Section 
            title="Solar Roof"
            description="Produce Clean Energy
            From Your Roof"
            backgroundImg= "/images/solar-roof.jpg"
            leftBtnTxt= "Order Now"
            rightBtnTxt= "Learn More"
        />

          <Section 
            title="Accessories"
            // description="Order Online for Touchless Delivery"
            backgroundImg= "/images/accessories.jpg"
            leftBtnTxt= "Shop Now"
            // rightBtnTxt= "Existing Inventory"
        />
    </div>
  )
}

export default Home
