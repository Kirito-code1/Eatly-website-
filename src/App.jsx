import { useState } from 'react';
import MainPage from './mainPage/Main_page';
import AdvertPage from './mainPage/advert_page';
import RestPage from './mainPage/Rest_page';
export default function App() {
  return (
		<>
            <MainPage/>
			<AdvertPage/>
		<RestPage/>
		</>
	)
}
