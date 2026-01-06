import React from "react";
import '../css/blocks/rest_page.css'
import '../css/blocks/messagePart.css'
import MessagesCard from "./MessageCard.jsx";

export default function MessagePart(){

    return (
			<div className='container'>
				<div className='messagePart'>
					<h1 className='header-text'>
						<span>Customer</span> Say
					</h1>
					<div className='messagesCards'>
						<MessagesCard />
						<MessagesCard />
						<MessagesCard />
						<MessagesCard />
					</div>
				</div>
			</div>
		)
}