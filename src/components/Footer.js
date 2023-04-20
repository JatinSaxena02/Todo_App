import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div style={{top: '0',boxSizing:"0px 0px 10px lightgray",position: 'absolute',height:'auto',width:'100%',backgroundColor:'grey'}}>
      <div style={{display:'flex',justifyContent:'center',fontSize: '3rem',color: 'aliceblue',padding:'10px',gap:'3rem'}}>
      <a href='https://github.com/JatinSaxena02' target='_blank' rel="noreferrer" style={{color:'white'}}><BsGithub /></a>
      <a  href='https://www.linkedin.com/in/jatin-saxena-23276a213/' target='_blank' rel="noreferrer" style={{color:'white'}}><BsLinkedin/></a>
      </div>
    </div>
  )
}

export default Footer
