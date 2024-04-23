import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (

    <div className='home'>
      <h1>Quizz App</h1>
        <Link to={"/easy"}>Easy</Link>
        <Link to={"/medium"}>Medium</Link>
        <Link to={"/hard"}>Hard</Link>
    </div>
  )
}

export default Home