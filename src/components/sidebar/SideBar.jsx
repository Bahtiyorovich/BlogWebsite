import './sidebar.css';
import IMG1 from '../images/Portfolio_image.jpg'
export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src={IMG1}
          alt="fayl yuklanmadi"
        />
        <p>
          Ushbu web-sayt men haqimda qiziqarli ma'lumotlar berish uchun yaratilmoqda. 
          Leki bu sayt portfolio yoki rezyume emas, bu shunchaki mening qiziqshlarim,
          nimalarni yoqtirishim, hozirda nima ish qilayotganim hamda nima ish qilmoqchi
          ekanligim vahokazolar haqida ma'lumot beradigan veb saytdir.
           Yani Blog veb saytdir. 
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>
          CATEGORIES
        </span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Work</li>
          <li className='sidebarListItem'>Hobbie</li>
          <li className='sidebarListItem'>cars</li>
          <li className='sidebarListItem'>Music</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
            <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
            <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
            <i className=" sidebarIcon fa-brands fa-telegram"></i>
            <i className=" sidebarIcon fa-brands fa-whatsapp-square"></i>
        </div>
      </div>
    </div>
  )
}
