import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

// 🔹 Pages
import MainPageWebsite from './mainPage/MainPageWebsite'
import MenuPageWebsite from './MenuPage/MenuPageWebsite'
import PricingPageWebsite from './PricingPage/PricingPageWebsite'
import BlogPageWebsite from './BlogPage/BlogPageWebsite'
import ArticlesPage from './ArticlesPage/Articles'
import ContactPageWebsite from './ContactPage/ContactPageWebsite'
import NotFoundPage from './NotFoundPage'

// 🔹 Auth pages
import Login from './auth/Login'
import Register from './auth/Register'
import ForgotPassword from './auth/ForgotPassword'

// 🔹 UI
import Navbar from './mainPage/Navbar'

export default function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		})
	}, [])

	return (
		<>
			{/* 🔝 Navbar (сам скрывается где надо) */}
			<Navbar />

			{/* 📄 Routes */}
			<Routes>
				<Route path='/' element={<MainPageWebsite />} />
				<Route path='/menu' element={<MenuPageWebsite />} />
				<Route path='/pricing' element={<PricingPageWebsite />} />
				<Route path='/blog' element={<BlogPageWebsite />} />
				<Route path='/articles' element={<ArticlesPage />} />
				<Route path='/article' element={<BlogPageWebsite />} />
				<Route path='/contact' element={<ContactPageWebsite />} />

				{/* 🔐 AUTH */}
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}
