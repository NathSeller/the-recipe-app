import React, { useState, useEffect } from 'react';
import './Popular.css';
import { Link } from 'react-router-dom';

function Popular() {

    const [popular, setPopular] = useState([]);
    const [shuffle, setShuffle] = useState(0);

    useEffect(() => {
        getPopular()
    },[shuffle]);



    const getPopular = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        const data = await response.json();
        setPopular(data.meals[0]);
        console.log(data.meals[0])
      };

  return (
    <div className='titles'>
        <Link className='popular' to={'/meal/' + popular.idMeal}>
            <h1 className='meal'>{popular.strMeal}</h1>
            <div className='images'>
                <img src={popular.strMealThumb} alt={popular.strTags} className='img' />
            </div>
        </Link>
            <div>
                <button onClick={() => {
                    setShuffle(shuffle + 1)
                 }}
                 className='shuffle'>
                    Shuffle
                </button><br></br>
            </div>
        <a href={popular.strYoutube} target='blank' rel='noreferrer' className='yt'>Heres a Video which may Help</a>
    </div>
  )
}

export default Popular;