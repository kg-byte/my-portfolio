import React, {useState} from 'react'
import '../SassStyles/About.scss'
import accomplishments from '../Assets/accomplishments.png'
import okinawaTravel from '../Assets/okinawaTravel.png'
import anime1 from '../Assets/anime1.png'
import anime2 from '../Assets/anime2.png'
import tbc from '../Assets/tbc.jpeg'

const Book = () => {
  const numOfPages = 4
  const maxLocation = numOfPages + 1
  const [currentLocation, setCurrentLocation] = useState(1)
  const [bookTransform, setBookTransform] = useState('')
  const [p1Flip, setP1Flip] = useState('')
  const [p2Flip, setP2Flip] = useState('')
  const [p3Flip, setP3Flip] = useState('')
  const [p4Flip, setP4Flip] = useState('')

  const openBook = () => {
    setBookTransform('openBook')
  }

  const closeBook = (isAtBeginning) => {
    if (isAtBeginning) {
      setBookTransform('closeBookBeginning')
    } else {
      setBookTransform('closeBookEnd')
    }
  }

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          setP1Flip("flipped flippedP1")
          break;
        case 2:
          setP2Flip("flipped flippedP2")
          break;
        case 3:
          setP3Flip("flipped flippedP3")
          break;
        case 4:
          setP4Flip("flipped flippedP4")
          closeBook(false);
          break;
        default:
          throw new Error("unkown state with currentLocation");
      }

      setCurrentLocation(currentLocation + 1)
    }
  }

  const goPrevPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true)
          setP1Flip('')
          break;
        case 3:
          setP2Flip('')
          break;
        case 4:
          setP3Flip('')
          break;
        case 5:
          openBook()
          setP4Flip('')
          break;
        default:
          throw new Error("unkown state with currentLocation");
      }

      setCurrentLocation(currentLocation - 1)
    }
  }

  return (
    <div className="book-btn-container">
      <button onClick={() => { goPrevPage() }}>Previous</button>
      <p className='no-book'>A larger screen size is needed to view the book!</p>

      {/* Book */}
      
      <div className={`book ${bookTransform}`}>

        {/* Paper 1 */}
        
        <div className={`paper p1 ${p1Flip}`}>
          <div className="front">
            <div className="f1 front-content">
              <h1>Things I Enjoy &#128155;</h1>
            </div>
          </div>
          <div className="back">
            <div className="b1 back-content">
              <h1>Engineering and Languages</h1>
              <img className='book-cover-img' src={accomplishments} alt='my accomplishments'/>
            </div>
          </div>
        </div>

        {/* Paper 2 */}
        
        <div className={`paper p2 ${p2Flip}`}>
          <div className="front">
            <div className="f2 front-content">
              <p>I love problem-solving and have a knack for languges! </p>
              <p>In 2021, I earned my bachelor's in Chemical Engineering and passed the Engineer in Training exam.</p>
              <p>I speak 3 languages fluently: Mandarin, English, and Japanese.</p>
              <p>I am teaching myself React.js and used my dog's pictures as game pieces.</p>
            </div>
          </div>
          <div className="back">
            <div className="b2 back-content">
            <h1>Traveling and Okinawa</h1>
              <img className='book-cover-img' src={okinawaTravel} alt='okinawa and traveling'/>
            </div>
          </div>
        </div>
        
        {/* Paper 3 */}
        
        <div className={`paper p3 ${p3Flip}`}>
          <div className="front">
            <div className="f3 front-content">
              <h1>"I am not the same having seen the moon shine on the other side of the world."</h1>
              <h2 class="alignright">-Mary Ann Radmacher</h2>
              <p>I love traveling and experience different cultures.</p>
              <p>My favorite place to live so far was Okinawa, Japan.</p>
            </div>
          </div>
          <div className="back">
            <div className="b3 back-content">              
              <h1>Some Anime Fan Art I</h1>
              <img className='book-cover-img' src={anime1} alt='My artwork'/>
            </div>
          </div>
        </div>

        {/* Paper 4 */}

        <div className={`paper p4 ${p4Flip}`}>
          <div className="front">
            <div className="f4 front-content">
              <h1>Some Anime Fan Art II</h1>
              <img className='book-cover-img' src={anime2} alt='My artwork 2'/>
            </div>
          </div>
          <div className="back">
            <div className="b4 back-content">
              <img className='book-cover-img' src={tbc} alt='tbc'/>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => { goNextPage() }}>Next</button>
    </div>
  )
}

export default Book