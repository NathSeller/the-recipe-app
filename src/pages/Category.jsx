import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Category.css'


function Category() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const fetchCategory = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.type}`);
    const data = await response.json();

    setCuisine(data.meals);

    console.log(data);
  }

  useEffect(() => {
    fetchCategory();
  },[]);

  return (
    <div className='box'>
      {cuisine.map((item) => {
        return(
          <div key={item.idMeal}>
            <div className='card'>
              <Link className='linkings' to={'/meal/' + item.idMeal }>
              <h4 className='writing'>{item.strMeal}</h4>
              <img className='pic' src={item.strMealThumb} alt='' />
              </Link>
            </div>
          
          </div>
        )
      })}
    </div>
  )
}

export default Category;