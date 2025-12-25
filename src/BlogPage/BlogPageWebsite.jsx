import { Link } from 'react-router-dom'
import Footer from '../mainPage/individualFooter'
import AllBlog from './AllBlog'
import Navbar from '../mainPage/Navbar';
export default function BlogPageWebsite() {
  return (
        <>
            <div className='container'>
                <Navbar />
                <AllBlog />
                <Footer />
            </div>
        </>
    )
}
