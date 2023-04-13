import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// IMAGE
import logo from 'images/WhiteLogo.svg';
import scrollDownIcon from 'images/scrollDown.svg';
import img00 from 'images/IM00.jpg';
import img01 from 'images/IM01.jpg';
import img02 from 'images/IM02.jpg';
import img03 from 'images/IM03.jpg';
import img04 from 'images/IM04.jpg';
import img05 from 'images/IM05.jpg';
import img06 from 'images/IM06.jpg';
import img07 from 'images/IM07.jpg';
import img08 from 'images/IM08.jpg';
import img09 from 'images/IM09.jpg';
import img10 from 'images/IM10.jpg';
import img11 from 'images/IM11.jpg';
import img12 from 'images/IM12.jpg';
import img13 from 'images/IM13.jpg';
import profileImg from 'images/profileImg.jpg';

const Main = () => {
  const [gnb, setGnb] = useState(false);
  const [load, setLoad] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const imgArr = [
    img00,
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
  ];

  const scrollYFn = async () => {
    const scrollYHandler = () => setScrollY(window.pageYOffset);
    const watch = () => window.addEventListener('scroll', scrollYHandler);
    watch();
    return () => window.removeEventListener('scroll', scrollYHandler);
  };

  useEffect(() => {
    if (scrollY > 500) setGnb(true);
    else setGnb(false);
  }, [scrollY]);

  useEffect(() => {
    scrollYFn();
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className='main-wrap column'>
        <div className='main-content column'>
          <img src={logo} alt='로고' />
        </div>
        <div className={`gnb row ${gnb ? 'active' : ''}`}>
          <img src={logo} alt='로고' />
        </div>
        <Swiper
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          speed={2000}
          pagination={true}
          modules={[Autoplay]}
          slidesPerView={'auto'}
          centeredSlides={true}
          effect={'flip'}>
          {imgArr.length
            ? imgArr.map((img, idx) => {
                return (
                  <SwiperSlide>
                    <img src={img} alt={`I.M${idx}`} />
                  </SwiperSlide>
                );
              }, <></>)
            : ''}
        </Swiper>
        <div className='content'>
          <h1>Profile</h1>
          <div className='profile-wrap row'>
            <img src={profileImg} alt='프로필' />
            <ul className='description'>
              <li>임창균</li>
              <li>Im Changkyun</li>
              <li>1996.01.26</li>
              <li>175cm / 63kg</li>
              <li>Rh+ O</li>
              <li>Rapper of MONSTA X</li>
              <li>Sony Music Entertainment Korea Inc.</li>
            </ul>
          </div>
        </div>
        <img
          src={scrollDownIcon}
          alt='스크롤 다운 아이콘'
          className='scroll-down-icon'
        />
      </div>
      <div className={`load column ${load ? 'active' : ''}`}>
        <img src={logo} alt='로고' />
      </div>
    </>
  );
};

export default Main;
