import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, selectedCity, handleCityChange}) => {
  console.log("cities?", cities)
  console.log("selectedCity?", selectedCity === null ? "null" : "correct")
  return (
    <div>
      <div className='btn-container'>
          <Button 
            variant={`${selectedCity === null ? "warning" : "dark"}`}
            onClick ={() => handleCityChange("current")}
          >
              current
          </Button>
          
          {cities.map((item, index) =>(
            <Button 
              variant={`${selectedCity === item ? "warning" : "dark"}`}
              key = {index}
              onClick = {() => setCity(item)}
            >
              {item}
            </Button>
          ))}
      </div>
    </div>
  )
}

export default WeatherButton
