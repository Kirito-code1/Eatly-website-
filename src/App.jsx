import { useState, useEffect } from 'react';
import MainPage from './mainPage/Main_page';
import AdvertPage from './mainPage/advert_page';
import RestPage from './mainPage/Rest_page';
import MessagePart from './mainPage/MessagePart';
import FooterPage from './mainPage/Footer_page';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App() {
	    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
  return (
		<>
        <MainPage/>
		<AdvertPage/>
		<RestPage/>
		<MessagePart/>
		<FooterPage/>
		</>
	)
}
