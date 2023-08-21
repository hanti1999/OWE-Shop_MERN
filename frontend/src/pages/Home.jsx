import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import ServiceList from '../services/ServiceList';
import ProductList from '../components/UI/ProductList';
import SectionTitle from '../shared/SectionTitle';
import SliderBanner from '../components/SliderBanner/SliderBanner';

import img from '../assets/img/shirt/tshirt1.png';
import img1 from '../assets/img/shirt/tshirt2.jpg';
import img2 from '../assets/img/shirt/tshirt3.jpg';
import img3 from '../assets/img/shirt/tshirt4.jpg';
import img4 from '../assets/img/shirt/tshirt5.jpg';
import bottomBanner from '../assets/img/tshirtBanner.jpg';

import MasonryImages from '../components/Feedback-images/MasonryImages';

const Home = () => {
  return (
    <>
      {/* Main banner ====== */}
      <section className='bg-gray-200'>
        <div className='container'>
          <SliderBanner />
        </div>
      </section>

      {/* Service ====== */}
      <section className='services my-10'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-6'>
            <ServiceList />
          </div>
        </div>
      </section>

      {/* Popular products ====== */}
      <section className='popular-wrapper'>
        <div className='container'>
          <SectionTitle title={'Sản phẩm phổ biến'} />
          <div className='popular-products'>
            <div className='grid grid-cols-12 gap-3'>
              <ProductList />
            </div>
          </div>
          <div className='w-full text-center mt-10'>
            <button className='secondary__btn'>
              <Link to='/shop'>Xem thêm</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Mid banner ====== */}
      <section className='bg-gray-200 my-10'>
        <div className='container'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='col-span-1'>
              <h4 className='font-bold text-2xl'>BỘ SƯU TẬP</h4>
              <div className='separate'></div>
              <p className='mt-4 mb-10'>
                áo thun ngày hè Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Voluptates illum harum error. Impedit quaerat
                recusandae iure facere. Obcaecati earum non ut fugit dolor
                explicabo iste dolore rerum animi, laboriosam nostrum!
              </p>
              <button className='primary__btn'>
                <Link to='/shop'>Xem thêm</Link>
              </button>
            </div>
            <div className='image-wrapper col-span-1'>
              <div className='flex gap-1'>
                <div>
                  <img className='mb-1' src={img1} alt='' />
                  <img src={img2} alt='' />
                </div>
                <div>
                  <img className='mb-1' src={img3} alt='' />
                  <img src={img4} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New products */}
      <section className='popular-wrapper'>
        <div className='container'>
          <SectionTitle title={'Sản phẩm mới'} />
          <div className='popular-products'>
            <div className='grid grid-cols-12 gap-3'>
              <ProductList />
              <ProductList />
            </div>
          </div>
          <div className='w-full text-center mt-10'>
            <button className='secondary__btn'>
              <Link to='/shop'>Xem thêm</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom banner */}
      <section className='bottom-banner my-10'>
        <div className='container relative'>
          <img
            className='rounded aspect-video object-cover brightness-50'
            src={bottomBanner}
            alt=''
          />
          <div className='bottom-banner__content absolute top-0 w-full h-full flex flex-col items-center justify-center'>
            <h4 className='text-xl text-white italic'>Flash Sale</h4>
            <span className=' ml-1 text-4xl font-semibold text-[#faa935]'>
              99.000 VND
            </span>
            <h3 className='font-bold uppercase text-3xl text-white my-4'>
              Chỉ duy nhất hôm nay
            </h3>
            <p className='text-white text-center'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              distinctio, nisi consequuntur excepturi nemo, ducimus in commodi
              expedita quod pariatur assumenda culpa officia neque ipsam enim.
            </p>
            <button className='primary__btn mt-6'>
              <Link to='/shop'>Mua ngay</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section>
        <div className='container'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              <SectionTitle title={'Góc feedback'} />
            </div>
            <div className='col-span-12'>
              <MasonryImages />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
