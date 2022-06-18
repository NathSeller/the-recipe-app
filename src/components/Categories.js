import React, { useEffect, useState } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';


function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories()
  },[]);


  const getCategories = async () => {

    const check = localStorage.getItem('categories');
    if(check){
      setCategories(JSON.parse(check));
    } else {
       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
      const data = await response.json();

      localStorage.setItem("categories", JSON.stringify(data.categories));
      setCategories(data.categories);
      console.log(data);
    }
  };

  return (
    <div className='categories'>
      {categories.map((things) => {
        return (
          <div key={things.idCategory} className='text'>
            <Link className='links' to={'/category/' + things.strCategory}>
              <h4 className='category'>{things.strCategory}</h4>
              <img src={things.strCategoryThumb} alt='' className='image'/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Categories;