import React from 'react'
import './service-card.css'

const ServiceCard = ({item}) => {
    const {icon, title, desc} = item;
  return (
    <div className="service__item">
        <i className={icon}></i>
        <h5 className=' mt-3 font-semibold uppercase text-lg'>{title}</h5>
        <p className=' my-3'>{desc}</p>
    </div>
  )
}

export default ServiceCard