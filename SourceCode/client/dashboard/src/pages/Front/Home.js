// import react from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import Swiper from '../../components/Swiper/Swiper';
import Features from '../../components/Features/Features';
import AboutOne from '../../components/AboutOne/AboutOne';
import Categories from '../../components/Categories/Categories';
import Courses from '../../components/Courses/Courses';
import { useEffect, useState } from 'react';
import './main.css';
import './responsive.css';
import RegisterSection from './RegisterSection/RegisterSection';
import Testimoneal from './Testimoneal/Testimoneal';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="page-wrapper">
        <MainHeader />
        <Swiper />
        <Features />
        <AboutOne />
        <Courses />
        <RegisterSection />
        <Categories />
        <Testimoneal />
        {/*<Slider />*/}
        {/*<Register />*/}
        <Footer />
      </div>
    </>
  );
};

export default Home;
