import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import ChatList from '../screens/chatist/ChatList';
import './header.scss'

const Header = () => {
  return (
    <>
    <header>
        <div className="containner">
            <IoIosMenu size={25} />
            <div className="search__containner">
                <FaSearch size={2} />
                <input type="text" placeholder='Поиск' />
            </div>
        </div>
        <ChatList />
    </header>
    </>
  )
}

export default Header