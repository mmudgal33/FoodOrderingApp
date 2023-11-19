import React from 'react'
import { foodTypes } from '../../data/data'
import { Link } from 'react-router-dom'
import classes from './foods.module.css'

import { useSelector } from 'react-redux'



const Foods = () => {

  const { token } = useSelector((state) => state.auth)

  
  


  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Fast food meals we offer</h2>
        <h4 className={classes.subtitle}>Always on time</h4>
        <div className={classes.foods}>
          {/* {foodTypes.map((foodType) => (
              <Link to={`/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
                <h4>{foodType.name}</h4>
                <div className={classes.imgContainer}>
                  <img src={foodType.img} />
                </div>
              </Link>
            ))} */}

            {token !== null ? foodTypes.map((foodType) => (
              <Link to={`/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
                <h4>{foodType.name}</h4>
                <div className={classes.imgContainer}>
                  <img src={foodType.img} alt="" />
                </div>
              </Link>
            )) : <h1 className={classes.noLogin}> Please login to give order! </h1>}

            

          
        </div>
        
      </div>
    </section>
  )
}

export default Foods


