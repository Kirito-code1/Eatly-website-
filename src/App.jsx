import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import MainPageWebsite from './mainPage/MainPageWebsite';
import MenuPageWebsite from './MenuPage/MenuPageWebsite';
import NotFoundPage from './NotFoundPage';
export default function App() {
	useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
	const AppRoutes = {
		HOME : '/',
		MENU : '/menu',
		NOT_FOUND : '*'
	}
  return (
		<>
		<Routes>
			<Route path={AppRoutes.HOME} element = {<MainPageWebsite/>}/>
			<Route path={AppRoutes.MENU} element = {<MenuPageWebsite/>}/>
			<Route path={AppRoutes.NOT_FOUND} element = {<NotFoundPage/>}/>
		</Routes>
		</>
	)
}
