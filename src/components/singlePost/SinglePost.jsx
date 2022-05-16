import './singlePost.css'
import IMG2 from '../images/moto-img.jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img className='singlePostImg' src={IMG2} alt=""/>
            <h1 className='singlePostTitle'>
                Post Sarlavhasi
                <div className='singlePostEdit'>
                <i className=" singlePostIcon fa-solid fa-pen-to-square"/>
                <i className=" singlePostIcon fa-solid fa-trash-can"/>
                </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>
                    Author: <b>Sherzod</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
                Bu yerde Post haqida umumiy ma'lumot beriladi
            </p>
        </div>
    </div>
  )
}
