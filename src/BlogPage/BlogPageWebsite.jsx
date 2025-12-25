import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter'
import Blog from './Blog'
import Navbar from '../mainPage/Navbar';
export default function BlogPageWebsite() {
  return (
        <>
            <div className='container'>
                <Navbar />
                <Blog />
                <Footer />
            </div>
        </>
    )
}
