import './home.css';
import Header from '../../components/header/Header'
import Post from '../../components/post/Post'
import SideBar from '../../components/sidebar/SideBar'
export default function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
          <Post/>
          <SideBar/>
      </div>
    </>
  )
}
