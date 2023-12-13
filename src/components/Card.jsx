import React from 'react'

const Card = ({name,domain,url}) => {

  const imageUrl = "https://icons.duckduckgo.com/ip3/";


  return (
    <div className='card'>
        <img src={imageUrl+domain+".ico"} className='imgLogo'></img>
        <h4 className='name'>{name}</h4>
        <br/>
        <div><a href={url} target='_blank' >{url}</a></div>
    </div>
  )
}

export default Card
