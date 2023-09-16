import React from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import img from '../../assets/img/shirt/tshirt1.png';

const SliderBanner = () => {
  return (
    <Carousel autoplay>
      <div>
        <div className='grid grid-cols-2 gap-10'>
          <div className='col-span-2 md:col-span-1'>
            <img className='h-[500px]' src={img} alt='' />
          </div>
          <div className='col-span-2 md:col-span-1 flex items-center'>
            <div>
              <h4 className='font-semibold text-lg md:text-xl'>
                Sản phẩm nổi bật
              </h4>
              <h1 className='my-8 text-3xl md:text-4xl font-bold uppercase'>
                áo thun overwhelmet
              </h1>
              <p className='italic pb-1'>
                Trời thì nóng nhưng em chẳng sợ cóng!
              </p>
              <p>
                Siêu phẩm mùa hè: áo thun 100% cotton, co dãn 2 chiều, bo cổ dày
                dặn, hình may sắc nét
              </p>
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

      <div>
        <div className='grid grid-cols-2 gap-10'>
          <div className='col-span-2 md:col-span-1'>
            <img className='h-[500px]' src={img} alt='' />
          </div>
          <div className='col-span-2 md:col-span-1 flex items-center'>
            <div>
              <h4 className='font-semibold text-lg md:text-xl'>
                Sản phẩm nổi bật
              </h4>
              <h1 className='my-8 text-3xl md:text-4xl font-bold uppercase'>
                áo thun overwhelmet
              </h1>
              <p className='italic pb-1'>
                Trời thì nóng nhưng em chẳng sợ cóng!
              </p>
              <p>
                Siêu phẩm mùa hè: áo thun 100% cotton, co dãn 2 chiều, bo cổ dày
                dặn, hình may sắc nét
              </p>
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
    </Carousel>
  );
};

export default SliderBanner;
