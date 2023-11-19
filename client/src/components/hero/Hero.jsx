import React from 'react'
import classes from './hero.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai'

import womanEating from '../../assets/womaneating3.jpg'

const Hero = () => {
  return (
    // <section style={{height: '200vh'}} id="home" className={classes.container}>
    <section style={{ height: '84vh' }} id="home" className={classes.container}>
      

      <div className={classes.wrapper}>

        <div className={classes.left}>
          <img src={womanEating} alt="" className={classes.womanEatingImg} />
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}>We have delecious Food</h2>
          <p className={classes.firstMsg}>No Need to go out <span>We deliver it to home....</span></p>
          <p className={classes.secondMsg}>
            Why not order <span>samosa</span> or something <br /> <span>spicy and crispy </span>
            from our restaurnt
          </p>
          <p className={classes.desc}>
            We provide good service instantly
            We treat our orders as chance to win hearts
          </p>
          <div className={classes.buttons}>
            {/* <button className={classes.buttonOrder}>Order now!</button> */}
            <button className={classes.buttonSee}><a href="/foods">See what's available <AiOutlineArrowDown /> </a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero