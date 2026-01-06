import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter.jsx'
import Support from './Support.jsx'
import Navbar from '../mainPage/Navbar.jsx';
export default function ContactPageWebsite() {
  return (
        <>
            <div className='container'>
                <Navbar />
                <Support />
                <Footer />
            </div>
        </>
    )
}
