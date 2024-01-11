
import axios from 'axios';
import { useQuery } from 'react-query';
import Loader from '../loader/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import './Categories.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { ContextCart } from '../context/FeatureCart';

export default function Categories() {
  
 const getCategories = async()=>{
  const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=5`)
  return data;

 }
 const {data,isLoading} = useQuery('web_categories',getCategories)
 //console.log(data?.categories);


 if (isLoading){
  return <Loader/>
 }

  return (
  <div className="container py-5">

    <h1 className='text-Color  py-5'>Categories</h1>

   

   <Swiper 
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={30}
      slidesPerView={4.3}
      navigation
      loop={true}
      autoplay={{
        delay:1000,
      }}
      pagination={{ clickable: true ,

      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.categories.length ? data?.categories.map((ele)=>
      <SwiperSlide key={ele._id}>
        <Link to={`/products/category/${ele._id}`}  className='text-decoration-none fs-6 text-black'>
        <div className="categoty">
             <img src={ele.image.secure_url} className=''/>
        </div>

        </Link>
      
      </SwiperSlide>
      
     
    
      ):'<h2>No Categories Found</h2>'}
      
    
      
   </Swiper>
  
  </div>
   
    
   
  )
}
