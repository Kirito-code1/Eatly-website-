import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter.jsx'
import Blog from './Blog.jsx'
import Navbar from '../mainPage/Navbar.jsx';
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
