import { Link } from 'react-router-dom'
import './hero.scss'

const Hero = () => {
  return (
    <div className='hero '>
      <div className='hero__media'>
        <div className='hero__video'>
          <video
            className='lozad'
            loop={true}
            preload='auto'
            autoPlay={true}
            playsInline={true}
            muted={true}
            width='100%'
            height='100%'
            data-loaded='true'
          >
            <source
              data-src='https://res.cloudinary.com/roastcollective/video/upload/q_95/v1717782347/c8ff807e12a64e5fb587f908f5514e64_rctxxc.mp4'
              type='video/mp4'
              src='https://res.cloudinary.com/roastcollective/video/upload/q_95/v1717782347/c8ff807e12a64e5fb587f908f5514e64_rctxxc.mp4'
            />
            <source
              data-src='https://res.cloudinary.com/roastcollective/video/upload/q_95,f_webm,vc_vp9/v1717782347/c8ff807e12a64e5fb587f908f5514e64_rctxxc.mp4'
              type='video/webm'
              src='https://res.cloudinary.com/roastcollective/video/upload/q_95,f_webm,vc_vp9/v1717782347/c8ff807e12a64e5fb587f908f5514e64_rctxxc.mp4'
            />
          </video>
        </div>
      </div>
      <div className='hero__content'>
        <div className='hero__content__wrapper'>
          <h1 className='hero__description'>
            The Best Coffee, <br />
            Brought to You by America's Best Roasters
          </h1>
          <Link to='/products' className='btn btn--primary hero__btn '>
            Find My Match
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
