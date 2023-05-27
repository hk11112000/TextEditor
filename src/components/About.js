import React from 'react'
import './About.css'



export default function About(props) {
  return (
    <>
    <section className="container2">
        <div className="headingContainer">
            <h1><i className="bi bi-file-person"></i> About</h1>
        </div>
        <div className="mainContainer">
        <div className="imageDiv">
            <img src="/logo/logo.png" alt="logo" />
        </div>
        <div className="infoContainer">
            <p>Welcome to my text editor website! This website was created using a combination of HTML, CSS, and React JS. It provides an intuitive and user-friendly interface for editing text documents.  With its sleek design and responsive layout, you can easily edit your documents with just a few clicks. Whether you're a writer, student, or professional, this text editor is perfect for all your needs. Try it out today and experience the power and convenience of this cutting-edge tool!</p>
        </div>
        </div>
    </section>
    </>
  )
}
