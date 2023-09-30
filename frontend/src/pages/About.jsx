import React from 'react';

import CommonSection from '../shared/CommonSection';
import img1 from '../assets/img/shirt/tshirt2.jpg';

const About = () => {
  return (
    <>
      <CommonSection title={'Về OWE'} />
      <section>
        <div className='container'>
          <div className='grid grid-cols-3 gap-3'>
            <div className='col-span-2'>
              <h2 className='text-xl font-bold'>Title 1</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
                est eius neque dolorum voluptate autem dolores aspernatur
                aliquid hic? Tenetur rem ex suscipit perferendis in labore
                dignissimos perspiciatis doloribus sed.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                ducimus in ratione laborum voluptatem. Possimus minima labore a
                non sequi dicta dolorum tempore cum rerum ducimus officia, et
                tempora porro?
              </p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='col-span-1'>
              <img src={img1} alt='' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid grid-cols-3 gap-3'>
            <div className='col-span-1'>
              <img src={img1} alt='' />
            </div>
            <div className='col-span-2'>
              <h2 className=' text-xl font-bold'>Title 2</h2>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur veniam fugiat iste officia error maiores aspernatur
                unde nihil delectus culpa, impedit placeat dignissimos at minus
                saepe exercitationem magni! Expedita, deserunt?
              </p>
              <br />
              <div className='border-l-2 pl-6'>
                <p className=' italic text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  totam magni ea, tenetur quia ex ducimus commodi et soluta
                  velit amet iste doloribus itaque, saepe eius harum
                  reprehenderit quae neque!
                  <br />
                  -- Steven Joke
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
