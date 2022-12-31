import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si'
import { AiFillTwitterCircle } from 'react-icons/ai'
import '../../css/footer.css'

const Footer = () => {

    return (
        <>
            <div className='footer'>
                <a href='https://www.youtube.com/'><BsYoutube /></a>
                <a href='https://www.facebook.com/'><BsFacebook /></a>
                <a href='https://www.instagram.com/'><SiInstagram /></a>
                <a href='https://www.twitter.com/'><AiFillTwitterCircle /></a>
            </div>
        </>
    )
}
export default Footer