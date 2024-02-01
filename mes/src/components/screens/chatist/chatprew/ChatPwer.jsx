import './cp.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const ChatPwer = (props) => {

    const [activeChat, isActiveChat] = useState(true);
    const [isMessage, setIsMessage] = useState(false);
    const [isOnline, setIsOnline] = useState(false);

  return(
    // <div className='chat__prew_containner active'>
    <Link className={props.style}>
      <img className='avatar' src={props.src} />
      <div className="info">
        <h5>{props.name}</h5>
        <span>{props.last_msg}</span>
      </div>
    </Link>
  )
}

export default ChatPwer
