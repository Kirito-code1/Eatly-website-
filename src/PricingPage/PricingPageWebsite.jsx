import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter'
import MessagePart from '../mainPage/MessagePart'
import ControlPartDashBoard from '../mainPage/ControlPartDashBoard';
import Navbar from '../mainPage/Navbar';
import Pricing from './Pricing';
export default function PricingPageWebsite() {
	return (
		<>
			<div className='container'>
				<Navbar/>
				<Pricing/>
				<ControlPartDashBoard />
				<MessagePart />
			<Footer />
			</div>
		</>
	)
}
