import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Male = () => {
  const { id } = useParams();
  const sliceId = id.slice(-24, id.length);

  const { data: product } = useFetch(`${BASE_URL}/products/${sliceId}`);
  console.log(product);
  const { productImg, title, price, sale, gender, size, details } = product;
  return (
    <div>
      <img src={productImg} alt='' />
      <p>{title}</p>
      <p>{price}</p>
      <p>{sale}</p>
      <p>{gender}</p>
      {/* <ul>
        {size.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      {/* <ul>
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Male;
