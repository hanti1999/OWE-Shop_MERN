import React from 'react'
import ProductCard from '../../shared/ProductCard'
import productData from '../../assets/data/products'

const ProductList = () => {
  return (
    <>
      {productData?.map((prod, index) => (
        <div key={index} className='col-span-3 mb-2'>
          <ProductCard products={prod} />
        </div>
      ))}
    </>
  )
}

export default ProductList