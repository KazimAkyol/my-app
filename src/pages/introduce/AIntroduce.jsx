import React from 'react'
import "./AIntroduce.css"
import Dropdown from '../../components/dropdown/Dropdown'

const AIntroduce = () => {

    const difficulty = ["easy", "medium", "hard"]
  return (
    <div className='introduce'>
        <div className='introduce-container'>
            <img src="https://img.freepik.com/vektoren-premium/quiz-logo-mit-sprechblasen-symbol_149152-813.jpg" alt="" />
            <Dropdown/>
        </div>
    </div>
  )
}

export default AIntroduce