import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import MainPageWebsite from './mainPage/MainPageWebsite';
import MenuPageWebsite from './MenuPage/MenuPageWebsite';
import NotFoundPage from './NotFoundPage';
import PricingPageWebsite from './PricingPage/PricingPageWebsite';
import ArticlesPage from './ArticlesPage/Articles';
export default function App() {
	useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
	const AppRoutes = {
		HOME : '/',
		BLOG : '/blog',
		MENU : '/menu',
		PRICING : '/pricing',
		NOT_FOUND : '*'
	}
  return (
		<>
			<Routes>
				<Route path={AppRoutes.HOME} element={<MainPageWebsite />} />
				<Route path={AppRoutes.BLOG} element = {<ArticlesPage/>}/>
				<Route path={AppRoutes.MENU} element={<MenuPageWebsite />} />
				<Route path={AppRoutes.PRICING} element={<PricingPageWebsite />} />
				<Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
			</Routes>
		</>
	)
}
