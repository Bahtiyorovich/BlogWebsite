import './topbar.css'
import {Link} from 'react-router-dom'

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className=" topIcon fa-brands fa-facebook-square"></i>
            <i className=" topIcon fa-brands fa-instagram-square"></i>
            <i className=" topIcon fa-brands fa-telegram"></i>
            <i className=" topIcon fa-brands fa-whatsapp-square"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'><Link className='link' to="/"><i className="topIconBar fa-solid fa-house-chimney"></i></Link></li>
                {/* <li className='topListItem'><Link className='link' to="/">About</Link></li>
                <li className='topListItem'><Link className='link' to="/">Contact</Link></li> */}
                <li className='topListItem'><Link className='link' to="/write"><i className="topIconBar fa-solid fa-pen-to-square"></i></Link></li>
                <li className='topListItem'><Link className='link' to="/">
                    {user && "LogOut"}                
                </Link>
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <i className="topIcon fa-brands fa-react"/>
                ) : (
                    <>
                        <Link className='link' to='/login'>Login</Link>
                        <Link className='link' to="/register">Register</Link>
                    </>
                )
            }
            
            <i className=" topSearchIcon fas fa-search"/>
        </div>

    </div>
  )
}
