import React from 'react'
import NoteCard from './NoteCard.jsx'

export default function ControlPartDashBoard() {
	return (
		<div className='controlPartDashBoard'>
			<h1 className='header-text'>
				Control <span>Purchases</span> Via Dashboard
			</h1>
			<div className='one-block-dashboard'>
				<div className='left-side-notifications'>
					<div className='notifications-cards' data-aos='fade-right'>
						<NoteCard />
						<NoteCard />
						<NoteCard />
						{/* <img src="./public/Vector 14.svg" alt="" className="arrow"/> */}
					</div>
				</div>
				<div className='right-side-dashboard'>
					<div className='dashboard' data-aos='fade-left'>
						<div className='top-side-dashboard'>
							<p className='text-purchases'>Purchases</p>
							<select name='' id='select'>
								<option value=''>This month</option>
								<option value=''>This year</option>
								<option value=''>This week</option>
							</select>
						</div>
						<div className='bottom-side-dashboard'>
							<div className='card-expense'>
								<div className='left-side-dash'>
									<img src='./public/icon.png' alt='' />
									<p className='nameCard'>Expense</p>
								</div>
								<p className='costCard'>$409.00</p>
							</div>
							<div className='card-expense'>
								<div className='left-side-dash'>
									<img src='./public/icon (1).png' alt='' />
									<p className='nameCard'>Vocher Usage</p>
								</div>
								<p className='costCard'>$45.78</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
