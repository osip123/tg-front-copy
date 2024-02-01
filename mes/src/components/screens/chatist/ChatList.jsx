import React from 'react'
import ChatPwer from './chatprew/ChatPwer'
import './cl.scss'

const ChatList = () => {
  return (
    <>
    <div className="containner_2">
      <ChatPwer style={'chat__prew_containner active'} src='https://www.w3schools.com/howto/img_avatar.png' name='1' last_msg='2432' />
      <ChatPwer style={'chat__prew_containner'} src='none' name='2' last_msg='42341' />
    </div>
    </>
  )
}

export default ChatList
