import './header.css';
import IMG from '../images/merc-img.jpg';

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog web Site</span>
        </div>
        <img className='headerImg' src={IMG} alt="fayl yuklanmadi"></img>
    </div>
  )
}

