import './write.css';
import IMG2 from '../../components/images/merc-classic.jpg'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeimg' src={IMG2} alt=""/>
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i className=" writeIcon fas fa-plus"/>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea type="text" placeholder='Tell your story...' className='writeInput writeText'/>         
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
