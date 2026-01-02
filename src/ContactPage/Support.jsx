import '../css/block/support.css'

export default function Support() {
	return (
		<section className='contact'>
			<div className='contact__main'>
				<div className='contact__left'>
					<h1 className='contact__title text-desktop'>Just Contact</h1>
					<span className='arrow1' />
					<h1 className='contact__title text-mobile'>Contact Us</h1>
				</div>

				<div className='contact__form'>
					<form className='contact__form-inner'>
						<p className='contact__subtitle'>
							Customer <span>Support</span>
						</p>

						<input
							className='contact__input'
							type='text'
							placeholder='Full name'
						/>

						<input
							className='contact__input'
							type='email'
							placeholder='Enter your email'
						/>

						<textarea
							className='contact__textarea'
							placeholder='Enter the problem or query'
						/>

						<button className='contact__button' type='submit'>
							Send Now
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
