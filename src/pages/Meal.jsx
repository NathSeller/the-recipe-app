import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Meal() {

    const [meal, setMeal] = useState([]);
    const [activeTab, setActiveTab] = useState('instructions');

    useEffect(() => {
        getMeal()
    },[]);

    let params = useParams();

    const getMeal = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal}`);
        const data = await response.json();
        setMeal(data.meals[0]);
        console.log(data)
      };


  return (
    <DetailWrapper>
        <div>
         <h2>{meal.strMeal}</h2>
         <img src={meal.strMealThumb} alt='' className='photo'/>
        </div>
    <List>
        <div>
            <Button className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab('instructions')}>
                            Instructions
            </Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab('ingredients')}>
                            Ingredients
            </Button>
        </div>

                        {activeTab === 'instructions' && (
                        <h5 className='instructions'>{meal.strInstructions}</h5>
                        )}
                        
                        
                        {activeTab === 'ingredients' && (
                            <div>
                                <h4>{meal.strMeasure1} {meal.strIngredient1}</h4>
                                <h4>{meal.strMeasure2} {meal.strIngredient2}</h4>
                                <h4>{meal.strMeasure3} {meal.strIngredient3}</h4>
                                <h4>{meal.strMeasure4} {meal.strIngredient4}</h4>
                                <h4>{meal.strMeasure5} {meal.strIngredient5}</h4>
                                <h4>{meal.strMeasure6} {meal.strIngredient6}</h4>
                                <h4>{meal.strMeasure7} {meal.strIngredient7}</h4>
                                <h4>{meal.strMeasure8} {meal.strIngredient8}</h4>
                                <h4>{meal.strMeasure9} {meal.strIngredient9}</h4>
                                <h4>{meal.strMeasure10} {meal.strIngredient10}</h4>
                                <h4>{meal.strMeasure11} {meal.strIngredient11}</h4>
                                <h4>{meal.strMeasure12} {meal.strIngredient12}</h4>
                                <h4>{meal.strMeasure13} {meal.strIngredient13}</h4>
                                <h4>{meal.strMeasure14} {meal.strIngredient14}</h4>
                                <h4>{meal.strMeasure15} {meal.strIngredient15}</h4>
                                <h4>{meal.strMeasure16} {meal.strIngredient16}</h4>
                                <h4>{meal.strMeasure17} {meal.strIngredient17}</h4>
                                <h4>{meal.strMeasure18} {meal.strIngredient18}</h4>
                                <h4>{meal.strMeasure19} {meal.strIngredient19}</h4>
                                <h4>{meal.strMeasure20} {meal.strIngredient20}</h4>
                            </div>
                        )}
        </List> 
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    font-size: 1rem;
    @media only screen and (max-device-width: 480px) {
        flex-direction: column;
        margin-top: 1rem;
    }
    .active {
        background: linear-gradient(to bottom right, royalblue, lightblue);
        color: white;
        font-size: 1rem;
        @media only screen and (max-device-width: 480px) {
            margin-right: 1rem;
            font-size: .75rem;
            padding: .5rem 1rem;
        }
    }
    h2 {
        margin-bottom: 2rem;
    }
    
    img {
        height: 30rem;
        width: 30rem;
        margin-left: 5rem;
        @media only screen and (max-device-width: 480px) {
            width: 20rem;
            height: 20rem;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 700;
    border-radius: 1rem;
    font-size: 1rem;
    @media only screen and (max-device-width: 480px) {
        margin: .5rem;
        font-size: .75rem;
        padding: .5rem 1rem;
        margin-top: 1.5rem;
        justify-content: center;
        margin-right: 1rem;
    }
`;


const List = styled.div`
    width: 40rem;
    margin-left: 7rem;
    @media only screen and (max-device-width: 480px) {
        margin-left: 1rem;
        font-size: .75rem;
        justify-content: center;
        margin-right: 1rem;
        width: auto;
    }
`;

export default Meal;