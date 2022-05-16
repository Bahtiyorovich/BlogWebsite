import './posts.css'
import IMG2 from '../images/merc-2.jpg'

export default function posts() {
  return (
    <div className='post'>
        <img className='postImg' src={IMG2} alt="fayl yuklanmadi"/>
        <div className='postInfo'>
            <div className='postCats'>
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Bu yerga Postlarimni joylashtiraman.
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
          Bu yerda Postlarimga tarif keltiriladi.
          Bu yerda Postlarimga tarif keltiriladi. Bu yerda Postlarimga tarif keltiriladi,Bu yerda Postlarimga tarif keltiriladi,
          Bu yerda Postlarimga tarif keltiriladi. Bu yerda Postlarimga tarif keltiriladi.Bu yerda Postlarimga tarif keltiriladi.
          Bu yerda Postlarimga tarif keltiriladi. Bu yerda Postlarimga tarif keltiriladi. Bu yerda Postlarimga tarif keltiriladi
        </p>
    </div>
  )
}
