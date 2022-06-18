import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search() {

  const [bar, setBar] = useState('closed');
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  let searchRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setBar('closed')
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
    document.removeEventListener('mousedown', handler);
    }
  })

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    <div className='search-bar'>
        <form onSubmit={submitHandler}>
            <input 
            ref={searchRef}
            className={bar === 'open' ? 'input-active' : 'input'}
            onChange={(e) => setInput(e.target.value) } 
            type='text'
            placeholder='Search by key Word' 
            value={input}/>
            <FaSearch className='search-btn' onClick={() => setBar('open')}></FaSearch>
        </form>
    </div>
  )
}

export default Search;