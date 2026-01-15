import { Link } from 'react-router-dom'
import '../css/blocks/login.css'


export default function LoginPage() {
	return (
		<>
			<div className='login'>
				{/* ЛЕВАЯ ЧАСТЬ */}
				<div className='login__left'>
					<div className='login__box'>
						<h2 className='login__title'>Sign In To eatly</h2>

						<div className='login__socials'>
							<button className='social-btn'>G</button>
						</div>

						<p className='login__or'>OR</p>

						<form className='login__form'>
							<div className='input-wrapper'>
								<span className='icon'>✉</span>
								<input type='email' placeholder='Email' />
							</div>

							<div className='input-wrapper'>
								<span className='icon'>🔒</span>
								<input type='password' placeholder='Password' />
								<span className='eye'>👁</span>
							</div>

							<Link to='/forgot-password' className='forgot'>
								Forget Password ?
							</Link>

							<button className='login__submit'>SIGN IN</button>
						</form>

						<p className='login__bottom'>
							Create A New Account?{' '}
							<span>
								<Link to='/register'>Sign Up</Link>
							</span>
						</p>
					</div>

					<div className='burger'>
						<input type='checkbox' id='burger-toggle' />

						{/* Бургер-кнопка */}
						<label htmlFor='burger-toggle' className='burger__btn'>
							<span></span>
							<span></span>
							<span></span>
						</label>

						{/* Меню */}
						<nav className='burger__menu'>
							{/* ❌ КРЕСТИК */}
							<label htmlFor='burger-toggle' className='burger__close'>
								✕
							</label>

							<Link to='/'>Main</Link>
							<Link to='/login'>Login</Link>
							<Link to='/register'>Register</Link>
						</nav>
					</div>
				</div>

				{/* ПРАВАЯ ЧАСТЬ */}
				<div className='login__right'>
					<Link to='/'>
						<img
							className='login__img'
							src={new URL("/Food Image (1).svg", import.meta.url).href}
							alt='Food'
						/>
						<h2>Find Foods With Love</h2>
						<p>
							Eatly Is The Food Delivery Dashboard And Having More Than 2k+
							Dishes Including Asian, Italians And Many More.
						</p>
					</Link>
				</div>
			</div>
		</>
	)
}
