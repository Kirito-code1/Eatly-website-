import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter'
import MessagePart from '../mainPage/MessagePart'
import ControlPartDashBoard from '../mainPage/ControlPartDashBoard'

export default function PricingPageWebsite() {
	return (
		<>
			<div className='container'>
				<ControlPartDashBoard />
			</div>
			<MessagePart />
			<Footer />
		</>
	)
}
