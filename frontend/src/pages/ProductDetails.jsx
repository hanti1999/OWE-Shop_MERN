import React, { useEffect, useRef, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { LoadingOutlined } from '@ant-design/icons';
import { Rate, Select, Image, Button } from 'antd';

import ServiceList from '../services/ServiceList';
import ProductList from '../shared/ProductList';
import { cartActions } from '../redux/slices/cartSlice';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import '../styles/product-details.css';

const ProductDetails = () => {
  const { id } = useParams();
  const sliceId = id.slice(-24, id.length);
  const user = useSelector((state) => state.auth.user);

  const {
    data: product,
    loading,
    error,
  } = useFetch(`${BASE_URL}/products/${sliceId}`);
  const { gender, reviews } = product;

  const { data: products } = useFetch(`${BASE_URL}/products`);

  const relatedProducts = products.filter(
    (product) => product.gender === gender
  );

  return (
    <>
      <Details product={product} loading={loading} error={error} />
      <Related
        relatedProducts={relatedProducts}
        loading={loading}
        error={error}
      />
      <Reviews reviews={reviews} id={sliceId} user={user} />
    </>
  );
};

const Details = ({ product, loading, error }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeState, setSizeState] = useState('');
  const dispatch = useDispatch();

  const {
    productImg,
    title,
    price,
    sale,
    gender,
    size,
    details,
    _id,
    gallery,
  } = product;

  const newPrice = Number(price) * Number(sale);

  const onSelectSize = (e) => {
    setSelectedSize(e);
  };

  const addToCart = () => {
    if (selectedSize === '') {
      setSizeState('error');
      toast.error('Bạn chưa chọn size!');
    } else {
      dispatch(
        cartActions.addItem({
          id: _id,
          title: title,
          size: selectedSize,
          price: newPrice,
          productImg: productImg,
        })
      );
      setSizeState('');
      toast.success('Đã thêm sản phẩm vào giỏ hàng!');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      {loading && (
        <h4 className='animate-pulse text-2xl text-center'>
          <LoadingOutlined /> Đang tải...
        </h4>
      )}
      {!loading && !error && (
        <>
          <section>
            <div className='container'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                <Image src={productImg} />

                <div className='product__info mt-3 md:mt-0'>
                  <h2 className='font-semibold text-2xl md:text-3xl'>
                    {title}
                  </h2>
                  <span className='uppercase text-sm md:text-base'>
                    {gender}
                  </span>

                  <div className='flex flex-col mt-3'>
                    <p className=' md:pr-2 '>
                      Giá gốc:{' '}
                      <span className='line-through text-gray-400'>
                        {parseInt(price).toLocaleString()}
                      </span>
                    </p>
                    <p className=' font-semibold text-base md:text-xl'>
                      Giá Sale:{' '}
                      <span className='text-red-500 pr-2'>
                        {parseInt(newPrice).toLocaleString()} đ
                      </span>
                    </p>
                  </div>

                  <div className=' mt-3'>
                    Kích thước áo:
                    <Select
                      className=' w-20 pl-1'
                      defaultValue=''
                      status={sizeState}
                      onChange={onSelectSize}
                      options={size?.map((s) => ({
                        value: s,
                        label: s,
                      }))}
                    />
                  </div>

                  <div className='mt-6 flex'>
                    <button
                      className='bg-black text-white px-6 py-2 rounded-3xl'
                      onClick={addToCart}
                    >
                      <i className='ri-shopping-bag-3-line pr-1 text-xl'></i>
                      Thêm vào giỏ hàng
                    </button>
                  </div>

                  <div className='mt-6 pt-1 border-t-2'>
                    <h5 className='font-semibold mb-2'>Đặc điểm nổi bật:</h5>
                    <ul className='list-disc pl-6'>
                      {details?.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className='grid grid-cols-2 gap-3 mt-6 pt-1 border-t-2'>
                    <ServiceList />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='container'>
              <h4 className=' border-b font-semibold text-lg md:text-2xl'>
                Chi tiết sản phẩm
              </h4>

              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-1 mt-4'>
                {gallery?.map((glr, index) => (
                  <img key={index} src={glr} alt='' />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

const Related = ({ relatedProducts, loading, error }) => {
  return (
    <>
      {!loading && !error && (
        <section>
          <div className='container'>
            <h3 className='font-semibold text-lg md:text-2xl border-b'>
              Sản phẩm bạn có thể thích
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-4'>
              <ProductList data={relatedProducts} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

const Reviews = ({ reviews, id, user }) => {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(false);
  const reviewMsgRef = useRef();

  const submitHandler = async () => {
    setLoading(true);
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        toast.error('Bạn chưa đăng nhập!');
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: rating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();

      if (!res.ok) {
        setLoading(false);
        toast.error(result.message);
      } else if (res.ok) {
        setLoading(false);
        toast.success('Gửi đánh giá thành công!');
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <>
      <section>
        <div className='container'>
          <h4 className='font-semibold text-lg md:text-2xl border-b'>
            Đánh giá sản phẩm{' '}
            {reviews?.length === 0 ? (
              <span>(Chưa có đánh giá)</span>
            ) : (
              <span>({reviews?.length} đánh giá)</span>
            )}
          </h4>

          <form className='review__form mt-4' action=''>
            <div className='mb-2'>
              <Rate onChange={(e) => setRating(e)} />
            </div>

            <div className='review__input'>
              <input
                type='text'
                ref={reviewMsgRef}
                placeholder='Chia sẻ cảm nghĩ của bạn...'
                required
              />
              <Button
                loading={loading}
                onClick={submitHandler}
                shape='round'
                size='large'
                className=' bg-secondary-color'
              >
                Gửi
              </Button>
            </div>
          </form>

          <div className='user__reviews mt-4'>
            <div className='grid grid-cols-2'>
              {reviews?.map((review, index) => (
                <div className='review__item mb-4' key={index}>
                  <span className='flex items-center text-secondary-color'>
                    {review.rating}
                    {review.rating < 5 ? (
                      <i className='ri-star-half-s-line'></i>
                    ) : (
                      <i className='ri-star-s-fill'></i>
                    )}
                  </span>
                  <h5 className=' font-semibold'>{review.username}</h5>
                  <p className=' text-gray-400 italic mt-1 mb-2'>
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                  <h6 className=' font-medium'>{review.reviewText}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
