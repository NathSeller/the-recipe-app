import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Searched.css';
import { Link } from 'react-router-dom';


function Searched(props) {

    const [typed, setTyped] = useState([]);
    let params = useParams();

    useEffect(() => {
        getTyped(params.search)
    },[params.search]);



    const getTyped = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`);
        const data = await response.json();
        setTyped(data.meals);
        console.log(data);
      };


  return (
    <div className='box'>
      {typed === null ? (<h1>Sorry, no results found! Please try something else!</h1>) :
      typed.map(item => {
        return(
          <div  key={item.idMeal}>
            <div className='card'>
              <Link className='linking' to={'/meal/' + item.idMeal }>
                <h4 className='writing'>{item.strMeal}</h4>
                <img className='pic' src={item.strMealThumb} alt='' />
              </Link>
            </div>
          
          </div>
        )
      })
    }-
    </div>
  )
}

export default Searched;