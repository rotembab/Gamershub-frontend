import React from 'react'
import Carousel from '../Components/Carousel'

export default function Home() {
  return (
    <div className='m-auto max-w-screen-2xl'>
        <Carousel images={[
            [["https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1673999865"],["Spider Man PC"]],
            [["https://www.posterposse.com/wp-content/uploads/2018/06/God-Of-War-banner.jpeg"],["God Of War PC"]]
            ]}/>
    </div>
  )
}
