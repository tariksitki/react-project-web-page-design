
import React from 'react'
import { IconDiv } from './BackIconStyles';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';

const BackIcon = () => {
    const navigate = useNavigate();
  return (
    <IconDiv>
        <div>
            <IoMdArrowRoundBack className='icon' onClick={() => navigate("/")} />
            <p>Back to Home</p>
        </div>
    </IconDiv>
  )
}

export default BackIcon