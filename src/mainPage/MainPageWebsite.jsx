import { useState } from 'react'

import MainPage from './Main_page'
import AdvertPage from './advert_page'
import RestPage from './Rest_page'
import MessagePart from './MessagePart'
import FooterPage from './Footer_page'

export default function MainPageWebsite() {
	return (
		<>
			<MainPage />
			<AdvertPage />
			<RestPage />
			<MessagePart />
			<FooterPage />
		</>
	)
}

