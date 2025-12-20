import React from 'react'
  import '../css/block/questionItem.css'


export default function QuestionItem({ text }) {
	return (
		<div className='question-item'>
			<div className='question-top'>
				<p className='question-text'>{text}</p>

				<button className='question-btn'>+</button>
			</div>

			<div className='question-line'></div>
		</div>
	)
}
