import { Link } from 'react-router-dom';
import NotFound from '../assets/img/404NotFound.jpg'

function PageNotFound() {
    return (
        <div className='flex items-center flex-col'>
            <img className='w-[720px]' src={NotFound} alt="" />
            <a className='mb-4' target='_blank' href="http://www.freepik.com">Designed by stories / Freepik</a>
            <button className='primary__btn'>
                <Link to='/'>Trở về trang chủ</Link>
            </button>
        </div>
    )
}

export default PageNotFound;