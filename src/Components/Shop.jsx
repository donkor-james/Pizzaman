
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './shop.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../assets/pizza/wings3.jpg';
import img2 from '../assets/pizza/fried(3).jpg';
import img3 from '../assets/pizza/jollof(Mb).jpg';
// import './Story.css';
import img4 from '../assets/pizza/NOODLES.jpg';
import img5 from '../assets/pizza/pizza9.jpg';
import img6 from '../assets/pizza/pizza1.jpg'
import img7 from '../assets/pizza/yam1.jpg'
import img8 from '../assets/pizza/friedRice3.jpg'
import img9 from '../assets/pizza/fried(Met).jpg'
import img10 from '../assets/pizza/tighs(12).jpg'
import img11 from '../assets/pizza/tighs(8).jpg'
import img12 from '../assets/pizza/jollof(3).jpg'
import img13 from '../assets/pizza/jollof(mini).jpg'
import img14 from '../assets/pizza/jollof(beef).jpg'
import img15 from '../assets/pizza/jollof(bucket).jpg'
import { Modal } from 'reactstrap';
import { AiOutlineClose } from 'react-icons/ai';


const Shop = () => {
  const [Ismodal, setIsModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const shopImg = [
    { id: 1, image: img1, title: 'Chicken Wings', description: 'Spicy Chicken Wings' },
    { id: 2, image: img15, title: 'Pizzaman Special', description: 'Perfection And Served' },
    { id: 3, image: img2, title: 'Fried Rice', description: 'Tasty Fried Rice' },
    { id: 4, image: img4, title: 'Noodles', description: 'Great Taste' },
    // { id: 5, image: img5, title: 'Gretaben', description: ' Tantalizing Flavor' },
    { id: 6, image: img12, title: 'Jollof + 3pcs Wings', description: 'Flavorful Combo' },
    { id: 7, image: img7, title: 'Yam Chips + Two Drums', description: 'Crispy Delight!' },
    { id: 8, image: img8, title: 'Chickenman FriedRice', description: 'Irresistible Flavor' },
    { id: 9, image: img9, title: 'FriedRice + 1 Drum', description: 'A Perfect Pair' },
    { id: 10, image: img10, title: 'Drums 8Pcs', description: 'Flavorful Drumstick Delight' },
    { id: 11, image: img11, title: 'Drums 12pcs', description: 'A Drumstick Feast!' },
    { id: 12, image: img6, title: 'Asti(Mushroom Pizza)', description: 'Mushroom Magic' },
    { id: 13, image: img13, title: 'Jollof Mini Bucket + Drums', description: 'Flavorful Combo' },
    // { id: 14, image: img14, title: 'Jollof Beef Cubes Mini Bucket', description: 'Savory Delight' },
    { id: 15, image: img3, title: 'Jollof Mini Bucket + Drums', description: 'A Flavorful Feast' },
  ];

  const toggle = (image) => {
    setIsModal(!Ismodal);
    setSelectedImage(image);
  };

  const handleCloseBtn = () => {
    setIsModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="mt-10 md:h-[rem]">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {shopImg.map((shop) => (
          <SwiperSlide key={shop.id}>
            <div className={`group cursor-pointer transform transition-transform hover:scale-95 ${shop.id}`}  onClick={() => toggle(shop.image)}>
              <Link to="">
                <img
                  src={shop.image}
                />
              </Link>
              <div className="bg-black opacity-30 absolute inset-0"></div>
              <div className="absolute w-full text-white text-center opacity-0 bottom-0 lg:group-hover:bottom-20 md:group-hover:bottom-20 group-hover:bottom-40 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-2xl font-bold">{shop.title}</h4>
                <span className="text-md">{shop.description}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={Ismodal} toggle={toggle} className="modal">
        <div className="absolute md:top-[90px] md:right-[60px] top-[150px] right-[30px] cursor-pointer">
          <AiOutlineClose color="#fff" onClick={handleCloseBtn} size={40} />
        </div>
        {selectedImage && (
          <img
            src={selectedImage}
            className="md:h-96 md:w-84 text-center w-[22rem] object-cover rounded-sm"
          />
        )}
      </Modal>

      <div className="bg-primary md:relative md:h-[10rem] w-full md:flex md:flex-row md:items-center md:px-16 md:justify-between mt-10 md:pt-4 py-14 px-6 mt-">
        <div className="flex flex-col md:mt-10">
          <h3 className="text-white font-bold md:text-3xl text-2xl">We Speak The Good Food Language</h3>
          <span className="text-white text-lg">Find your nearest restaurant</span>
        </div>
        <div className="mt-8 ">
          <Link
            to="/our-branches"
            className="text-center text-black lg:px-10 px-5 py-3 bg-white rounded-sm transition-all duration-400 hover:bg-black hover:text-white"
          >
            Shops Near Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
