import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import tailwind from '../assets/imgs/tailwind.png';
import bootstrap from '../assets/imgs/bootstrap.png';
import react from '../assets/imgs/react.png';
import javascript from '../assets/imgs/javascript.png';
import css from '../assets/imgs/css.webp';
import html from '../assets/imgs/html.webp';
function InfiniteLogos() {
  return (
    <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-4">
          {/* ... existing icon images ... */}
        </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          className="py-10 grayscale hover:grayscale-0 transition-all duration-300"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img src={html} alt="HTML" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={css} alt="CSS" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={javascript} alt="JavaScript" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={bootstrap} alt="Bootstrap" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={tailwind} alt="Tailwind" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={react} alt="React" className="w-24 h-24 object-contain" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          speed={3000}
          className="py-10 grayscale hover:grayscale-0 transition-all duration-300"
        >
          <SwiperSlide className="flex items-center justify-center">
            <img src={html} alt="HTML" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={css} alt="CSS" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={javascript} alt="JavaScript" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={bootstrap} alt="Bootstrap" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={tailwind} alt="Tailwind" className="w-24 h-24 object-contain" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={react} alt="React" className="w-24 h-24 object-contain" />
          </SwiperSlide>
        </Swiper>
    </>
  )
}

export default InfiniteLogos