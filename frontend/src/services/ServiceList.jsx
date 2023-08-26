import React from 'react';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    icon: 'ri-customer-service-2-line',
    title: 'Hỗ trợ 24/7',
    desc: 'Hỗ trợ mọi lúc mọi nơi',
  },
  {
    icon: 'ri-truck-line',
    title: 'Giao hàng siêu tốc',
    desc: 'Giao hàng khu vực nội thành nhanh chóng',
  },
  {
    icon: 'ri-refund-2-line',
    title: '7 ngày đổi trả',
    desc: 'Yên tâm mua sắm với chính sách đổi trả trong vòng 7 ngày',
  },
  {
    icon: 'ri-refund-2-line',
    title: 'Thanh toán dễ dàng',
    desc: 'Đang dạng phương thức thanh toán như COD, chuyển khoản',
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
