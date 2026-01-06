import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';

// Импорты компонентов
import MainPageWebsite from './mainPage/MainPageWebsite.jsx';
import MenuPageWebsite from './MenuPage/MenuPageWebsite.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import PricingPageWebsite from './PricingPage/PricingPageWebsite.jsx';
import BlogPageWebsite from './BlogPage/BlogPageWebsite.jsx';
import ArticlesPage from './ArticlesPage/Articles.jsx';
import ContactPageWebsite from './ContactPage/ContactPageWebsite.jsx';

export default function App() {
	// Инициализация AOS
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	// Пути приложения
	const AppRoutes = {
		HOME: '/',
		BLOG: '/blog',
		MENU: '/menu',
		PRICING: '/pricing',
		ARTICLES: '/articles',
		ARTICLE: '/article',
		CONTACT: '/contact',
		NOT_FOUND: '*',
	};

	return (
		<Routes>
			<Route path={AppRoutes.HOME} element={<MainPageWebsite />} />
			<Route path={AppRoutes.BLOG} element={<BlogPageWebsite />} />
			<Route path={AppRoutes.MENU} element={<MenuPageWebsite />} />
			<Route path={AppRoutes.PRICING} element={<PricingPageWebsite />} />
			<Route path={AppRoutes.ARTICLES} element={<ArticlesPage />} />
			<Route path={AppRoutes.CONTACT} element={<ContactPageWebsite />} />
			<Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	);
}
