 import React, {useState} from 'react'
 import './socialMedia.css'
 
 export default function SocialMedia() {
  const [state , setState] = useState('#66FCF1');
  const listenScrollEvent = (e) => {
    if (window.scrollY > 250) {
      setState('#fff')
    } else {
      setState('#66FCF1')
    }
  }
const scrollEvent = (e) => {
  (window.addEventListener('scroll',listenScrollEvent))
}
scrollEvent()
   return (
     <>
     <div className="social-container">
        <ul>
            <li><a href="https://www.linkedin.com/in/himanshu-karpe-a49453189" style={{color: state}} target='_blank' rel="noopener"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="https://instagram.com/___himanshu_hk?igshid=NTc4MTIwNjQ2YQ==" style={{color: state}} target='_blank' rel="noopener"><i className="bi bi-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/himanshu.karpe?mibextid=ZbWKwL" style={{color: state}} target='_blank' rel="noopener"><i className="bi bi-facebook"></i></a></li>
        </ul>
     </div>
     </>
   )
 }
 