import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    icon: 'ri-customer-service-2-line',
    title: 'Hỗ trợ 24/7',
    desc: 'lorem ipsum',
  },
  {
    icon: 'ri-truck-line',
    title: 'Giao hàng COD',
    desc: 'lorem ipsum',
  },
  {
    icon: 'ri-refund-2-line',
    title: 'Đổi trả trong 7 ngày',
    desc: 'lorem ipsum',
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <div key={index}>
          <ServiceCard item={item} />
        </div>
      ))}
    </>
  );
};

export default ServiceList;
