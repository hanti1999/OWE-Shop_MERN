import React from 'react'
import '../styles/home.css'
import tshirt from '../assets/img/shirt/tshirt.png'
import { Link } from 'react-router-dom'
import ServiceList from '../services/ServiceList'
import ProductList from '../components/UI/ProductList'

const Home = () => {
  return (
    <>
      {/* Main banner ====== */}
      <section className='bg-gray-200'>
        <div className="container mx-auto xl:max-w-[1200px]">
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-2 md:col-span-1">
              <img src={tshirt} alt="" />
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center">
              <div>
                <h4 className='font-semibold text-lg'>Sản phẩm nổi bật</h4>
                <h1 className='my-8 text-4xl font-bold uppercase'>T-Shirt màu đoen</h1>
                <p className='italic pb-1'>Trời thì nóng nhưng em chẳng sợ cóng!</p>
                <p>Siêu phẩm mùa hè: áo t-shirt 100% cotton, co dãn 2 chiều, bo cổ dày dặn, hình in sắc nét</p>
                <div className='my-6'>
                  <span>Giá chỉ: </span>
                  <b className='pl-2 text-2xl'>120.000đ</b>
                </div>
                <button className='primary__btn'>
                  <Link to='/shop'>Mua ngay</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service ====== */}
      <section className='services my-6'>
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <ServiceList />
          </div>
        </div>
      </section>

      {/* Popular products ====== */}
      <section className='popular-wrapper'>
        <div className="container">
          <div className='section-title'>
            <h1>Sản phẩm phổ biến</h1>
            <div className='separate'></div>
          </div>
          <div className='popular-products'>
            <div className="grid grid-cols-12 gap-3">
              <ProductList />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home