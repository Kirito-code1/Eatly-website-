import React from 'react'
import '../css/block/questions.css'
import QuestionItem from './QuestionItem.jsx'

export default function Questions() {
	return (
		<div className='container'>
			<div className='container-inner'>
				<section className='questions'>
					<h2 className='title'>
						Frequently Asked 
            <div>Questions</div>
					</h2>
					<div className='list'>
						<QuestionItem text='How long does delivery take?' />
						<QuestionItem text='How Does It Work ?' />
						<QuestionItem text='How does your food delivery service work?' />
						<QuestionItem text='What payment options do you accept?' />
						<QuestionItem text='Do you offer discounts or promotions?' />
					</div>
				</section>
			</div>
		</div>
	)
}
