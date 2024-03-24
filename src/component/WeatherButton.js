import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  console.log("cities?", cities)
  return (
    <div>
      <div className='btn-container'>
          <Button variant="dark">현재 위치</Button>
          
          {cities.map((item, index) =>(
            <Button 
              variant="dark"
              key = {index}
              onClick ={() => setCity(item)}
            >
              {item}
            </Button>
          ))}
      </div>
    </div>
  )
}

export default WeatherButton
