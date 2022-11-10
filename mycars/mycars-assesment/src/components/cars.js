import React from 'react'
import { Fragment, useEffect, useState } from 'react';
import {Link,useHistory} from "react-router-dom"
import "./style.css"
import "./img/next-icon.png"
import "./img/prev-icon.png"

const Cars = () => {
    const history=useHistory()
    history.push("/shop")
    const [userData, setUserData]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:3005/user')
      .then((data)=>{
        return data.json()
      })
      .then((userData)=>{
        setUserData(userData);
      })
    },[])
    history.push("/learn")
    return (
      <Fragment>
        <div className='post'>
        {
          userData.map((user,i)=>{
            return (
              <div className='content' key={i}>
              <div >
                  <header id='head'>
                    <div  >
                      <h4 className='name_loc'>{user.bodyType}</h4>

                      <h2 className='name_loc'>{user.modelName}<span className="span" style={{fontWeight:'100'}}>{user.modelType}</span></h2>
                    </div>
                  </header>
              </div>
              <div>
                <img className='image' src={user.imageUrl} alt=''></img>
              </div>
              <div id='footer'>
                <div className='learn'> <Link to='/learn'>Learn > </Link><span className='shop'><Link to='/shop'>Shop > </Link></span></div>
                </div>
                <div>
                    <img className='ic' src='prev-icon.png' alt=''></img>
                    <img className='ic' src='next-icon.png' alt=''></img>
                    <img className='next'src="https://www.seekpng.com/png/detail/79-790248_svg-png-icon-free-icon-for-next-steps.png" alt="Svg Png Icon Free - Icon For Next Steps@seekpng.com"></img>
                     
                </div>
              </div>
              
            )
          })
        }
        </div>
      </Fragment>
    );
  }
export default Cars