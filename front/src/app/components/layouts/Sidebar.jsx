import React from 'react';
import { RiDashboard2Line, RiUser3Line, RiMapPinLine, RiAlertLine, RiAdminLine } from "react-icons/ri";
import { MdQueryStats } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { isAdmin, selectIsLogged, signOut } from '../../redux-store/authenticationSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";

const Sidebar = () => {
    const navigate = useNavigate();

    return(
        <div className='flex'>
            <div className='bg-Teal h-[880px] w-[250px] p-1 pt-4'>
                <ul className='h-[40px] w-[230px]'>
                    <li
                        className='flex items-center text-center text-Whitesmoke justify-between px-2 py-2 mb-2 border rounded'
                        onClick={() => navigate('/Admin')}
                    >
                        <button className='flex text-center items-center text-xl'>
                            Dashboard
                        </button>
                        <RiDashboard2Line className='flex text-xl ml-2 flex-right' />
                    </li>
                    <li
                        className='flex items-center text-center text-Whitesmoke justify-between px-2 py-2 mb-2 border rounded'
                        onClick={() => navigate('/Admin')}
                    >
                        <button className='flex text-center items-center text-Whitesmoke text-xl'>
                            Utilisateurs
                        </button>
                        <RiUser3Line className='flex text-xl ml-2 flex-right' />
                    </li>
                    <li
                        className='flex items-center text-center text-Whitesmoke justify-between px-2 py-2 mb-2 border rounded'
                        onClick={() => navigate('/Admin')}
                    >
                        <button className='flex text-center items-center text-Whitesmoke text-xl'>
                            Trajets
                        </button>
                        <RiMapPinLine className='flex text-xl ml-2 flex-right' />
                    </li>
                    <li
                        className='flex items-center text-center text-Whitesmoke justify-between px-2 py-2 mb-2 border rounded'
                        onClick={() => navigate('/Admin/alert')}
                    >
                        <button className='flex text-center items-center text-Whitesmoke text-xl'>
                            Alertes
                        </button>
                        <RiAlertLine className='flex text-xl ml-2 flex-right' />
                    </li>
                    <li
                        className='flex items-center text-center text-Whitesmoke justify-between px-2 py-2 mb-2 border rounded'
                        onClick={() => navigate('/Admin')}
                    >
                        <button className='flex text-center items-center text-Whitesmoke text-xl'>
                            Statistiques
                        </button>
                        <MdQueryStats className='flex text-xl ml-2 flex-right' />
                    </li>
                    <li
                        className='flex items-center text-center text-Whitesmoke justify-between px-2 py-2 mb-2 border rounded'
                        onClick={() => navigate('/Admin')}
                    >
                        <button className='flex text-center items-center text-Whitesmoke text-xl'>
                            Admin
                        </button>
                        <RiAdminLine className='flex text-xl ml-2 flex-right' />
                    </li>
                </ul>
            </div>
            <div className="bg-Moonstone w-full">
                <h2>Hello world !</h2>
            </div>
        </div>
    );

}

export default Sidebar;