import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, selectedCity,handleCityChange}) => {
  console.log("cities?", cities)
  return (
    <div>
      <div className='btn-container'>
          <Button 
            variant={`${selectedCity === null ? "dark" : "warning"}`}
            onClick ={() => handleCityChange("current")}
          >
              현재 위치
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
