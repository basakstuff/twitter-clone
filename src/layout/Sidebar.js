import React from "react";
import twitterLogo from "../images/twitter.svg";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../Icon";

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between w-72 px-2'>
      <div>
        <div className='mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest'>
          <img src={twitterLogo} alt='Twitter Logo' className='w-9 h-9'></img>
        </div>
        <nav className='mb-4'>
          <ul>
            <li>Home</li>
            <li>Explore</li>
          </ul>
        </nav>
        <button className='bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transfrom transition-colors duration-200'>
          Tweet
        </button>
      </div>

      <div>Alt</div>
    </div>
  );
};

export default Sidebar;
