import React from 'react'
import { useState , useEffect } from 'react';
import Card from './Components/Card';

function Country() {
    const  [api,setApi] = useState([])

  //getData
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setApi(data));
  },[])
  console.log(api);
  return (
    
    
    <div>
        <h1>World Map </h1>
        <input type='text' placeholder='Enter Name'></input>
        <button type='submit'>Search</button>
        <hr />
        <div className='conainer'>
        {
          api.map(api => <Card {...api}></Card>)
        }
    </div>
    </div>
  )
}

export default Country