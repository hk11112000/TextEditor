import React from 'react'
import './Popup.css'

export default function Popup(props) {
  return (
    <>
        <section className="popupContainer"style= {{display: props.paragraph ? "block": "none"}}>
            <p>{props.paragraph}</p>
            <p className="content"></p>
        </section>
    </>
  )
}
