import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <div class="btn-container">
          <Button variant="dark">현재 위치</Button>
          <Button variant="dark">파리</Button>
          <Button variant="dark">뉴욕</Button>
      </div>
    </div>
  )
}

export default WeatherButton
