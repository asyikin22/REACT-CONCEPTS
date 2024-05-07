import profilePic from './assets/blog-image.jpg'


function Card() {

    return(
  
      <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"></img>
        <h2 className="card-title">Asyikin</h2>
        <p className='card-text'>I am a Full-Stack Developer and I love to travel 😊 </p>
      </div>
  
    )
  
  }
  
  export default Card
  