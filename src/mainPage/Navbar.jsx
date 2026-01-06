import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()

	// ✅ РАЗРЕШЁННЫЕ РОУТЫ (где navbar НУЖЕН)
	const allowedRoutes = [
		'/',
		'/menu',
		'/blog',
		'/pricing',
		'/contact',
		'/articles',
		'/article',
	]

	// ❌ ЕСЛИ ТЕКУЩЕГО ПУТИ НЕТ В СПИСКЕ — NAVBAR НЕ РЕНДЕРИМ
	if (!allowedRoutes.includes(location.pathname)) {
		return null
	}

	return (
		<header className='main-nav'>
			<div className='nav-wrapper'>
				<nav className='nav'>
					{/* ЛЕВАЯ ЧАСТЬ */}
					<div className='left-side-nav'>
						<Link to='/' className='logo'>
							<img src='/Logo (1).svg' alt='Logo' />
						</Link>

						<div
							className={`right-side-inner-nav ${
								isMenuOpen ? 'active' : ''
							}`}
						>
							<Link to='/menu' onClick={() => setIsMenuOpen(false)}>
								Menu
							</Link>
							<Link to='/blog' onClick={() => setIsMenuOpen(false)}>
								Blog
							</Link>
							<Link to='/pricing' onClick={() => setIsMenuOpen(false)}>
								Pricing
							</Link>
							<Link to='/contact' onClick={() => setIsMenuOpen(false)}>
								Contact
							</Link>
						</div>
					</div>

					{/* БУРГЕР */}
					<button
						className='menuBtn'
						onClick={() => setIsMenuOpen(prev => !prev)}
					>
						<img src='/menu (1).svg' alt='' />
					</button>

					{/* ПРАВАЯ ЧАСТЬ */}
					<div className='right-side-nav'>
						<Link to='/login' className='logBtn'>
							Login
						</Link>
						<Link to='/register' className='signBtn'>
							Sign Up
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}
