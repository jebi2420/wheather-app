import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)

    if (!weather || !weather.main || !weather.main.temp || !weather.weather || !weather.weather[0]) {
      // weather 객체 또는 필요한 속성이 없는 경우 처리
      return null;
  }

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
