import React from 'react'
import Fade from 'react-reveal/Fade';
import down from '../images/down-arrow.svg'

function Section({title, description, leftBtnTxt, rightBtnTxt, backgroundImg}) {
  return (
    <div className='wrapper'>

        <div className='imgwrapper'>
            <img src={backgroundImg} alt="bgimg" />
        </div>
        <div className='itemText'>
            <Fade bottom>
                <h1>{title}</h1>
                <p>{description}</p>
            </Fade>
        </div>

        <div className='button-arrow'>
            <Fade bottom>
                <div className='buttonGroup'>
                    
                        <button className='leftBtn'>
                            {leftBtnTxt}
                        </button>
                        { rightBtnTxt &&
                            <button className='rightBtn'>
                            {rightBtnTxt}
                        </button>}
                    
                </div>
            </Fade>
            <div className='downArrow'>
                <img src={down} alt="downArrow" />
            </div>
        </div>
    </div>
  )
}

export default Section
