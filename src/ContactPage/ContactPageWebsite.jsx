import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter'
import Support from './Support'
import Navbar from '../mainPage/Navbar';
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
