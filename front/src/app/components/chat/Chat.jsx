import {
  faComments,
  faPaperPlane,
  faWindowMinimize,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Chat = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      {active === false ? (
        <div
          onClick={() => setActive(true)}
          className="fixed bottom-4 right-4 bg-[#7CC474] p-6 border-2 rounded-full cursor-pointer text-white"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faComments} />
        </div>
      ) : (
        <div className="fixed bottom-4 right-4 grid grid-cols-[33%,1fr] bg-[#7CC474] max-h-500 h-500 w-500  rounded border-2 ">
          <div className="overflow-y-auto p-1">
            <ul className="text-center ">
              <li className="flex bg-[#047C89] mb-1 items-center py-2 cursor-pointer rounded border-y-1 text-white hover:bg-slate-200 hover:text-black">
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2" />
                <p className="font-bold">John Doe</p>
              </li>
              <li className="flex bg-[#047C89] mb-1 items-center py-2 cursor-pointer rounded border-y-1 text-white hover:bg-slate-200 hover:text-black">
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2" />
                <p className="font-bold">John Doe</p>
              </li>
              <li className="flex bg-[#047C89] mb-1 items-center py-2 cursor-pointer rounded border-y-1 text-white hover:bg-slate-200 hover:text-black">
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2" />
                <p className="font-bold">John Doe</p>
              </li>
              <li className="flex bg-[#047C89] mb-1 items-center py-2 cursor-pointer rounded border-y-1 text-white hover:bg-slate-200 hover:text-black">
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2" />
                <p className="font-bold">John Doe</p>
              </li>
            </ul>
          </div>
          <div className="border-l-2">
            <div className="relative h-[56px] flex items-center justify-center  bg-[#047C89]">
              <div className="h-10 w-10 rounded-full bg-slate-500 mx-2" />
              <p className="font-bold text-white">John Doe</p>
              <FontAwesomeIcon
                onClick={() => setActive(false)}
                className="absolute right-2 my-auto w-6 h-6 text-white cursor-pointer mb-4"
                icon={faWindowMinimize}
              />
            </div>
            <ul className=" justify-around h-[388px] overflow-y-auto  ">
              <li className="flex items-center my-4 ">
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2" />
                <p className="bg-slate-200 w-170 font-bold  rounded-xl px-4 py-2">
                  Bonjour, comment allez vous ? Je voulais savoir à quel endroit
                  on se retrouve ?
                </p>
              </li>
              <li className="flex justify-end items-center my-4 ">
                <p className="bg-[#047C89] w-170 font-bold rounded-xl text-white px-4 py-2">
                  Bonjour, je vais bien et vous ? On peut se retrouver place de
                  la republique vers 15h30, ça vous va ?
                </p>
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2 " />
              </li>
              <li className="flex items-center my-4">
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2" />
                <p className="bg-slate-200 w-170 font-bold  rounded-xl px-4 py-2">
                  Ok, on fait comme ça, à demain !
                </p>
              </li>
              <li className="flex justify-end items-center my-4 ">
                <p className="bg-[#047C89] w-170 font-bold rounded-xl text-white px-4 py-2">
                  A demain, bonne journée
                </p>
                <div className="h-10 w-10 rounded-full bg-slate-500 mx-2 " />
              </li>
            </ul>
            <form className="flex justify-around items-center w-full bg-[#047C89] h-[52px]">
              <input
                name="chat"
                type="text"
                className="border-2 border-gray-200 rounded-full 
                    py-2 px-4 text-gray-700 leading-tight h-10  focus:outline-none 
                     focus:border-[#7cc474] border-transparent w-[70%] focus:ring-0 `"
              />
              <button
                type="submit"
                className="bg-[#7CC474] rounded-full h-10 w-10 flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="h-5 w-5 m-auto text-white "
                />{' '}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
