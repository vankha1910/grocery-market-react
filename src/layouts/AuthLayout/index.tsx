import './authLayout.scss'
import Logo from '../../components/Logo'
import React from 'react'

interface AuthLayoutProps {
  introImg?: string
  introDesc?: string
  authHeading?: string
  authDesc?: string
  children: React.ReactNode
}
const index = ({ children, ...props }: AuthLayoutProps) => {
  return (
    <main className='auth'>
      {/* Auth intro */}
      <div className='auth__intro d-md-none'>
        <img src={props?.introImg} alt='intro-img' className='auth__intro-img' />
        <p className='auth__intro-text'>{props?.introDesc}</p>
      </div>
      {/* Auth content */}
      <div className='auth__content'>
        <div className='auth__content-inner'>
          <Logo isFooter={true}></Logo>
          <h1 className='auth__heading'>{props?.authHeading}</h1>
          <p className='auth__desc'>{props?.authDesc}</p>
          {children}
        </div>
      </div>
    </main>
  )
}

export default index
