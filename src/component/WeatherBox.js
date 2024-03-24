import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)

    let cel = weather?.main.temp.toFixed(1);
    let fah = ((cel * 9/5) + 32).toFixed(1);

  return (
    <div className='weatherBox'>
      <p>{weather?.name}</p>
      <h2>{cel}°C / {fah}°F </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
