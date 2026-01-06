import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter.jsx'
import MessagePart from '../mainPage/MessagePart.jsx'
import ControlPartDashBoard from '../mainPage/ControlPartDashBoard.jsx';
import Navbar from '../mainPage/Navbar.jsx';
import Pricing from './Pricing.jsx';
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
