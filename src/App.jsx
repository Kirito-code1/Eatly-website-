import { useState } from 'react';
import MainPage from './mainPage/Main_page';
import AdvertPage from './mainPage/advert_page';
import RestPage from './mainPage/Rest_page';
import MessagePart from './mainPage/MessagePart';
export default function App() {
  return (
		<>
            <MainPage/>
			<AdvertPage/>
		<RestPage/>
		<MessagePart/>
		</>
	)
}
