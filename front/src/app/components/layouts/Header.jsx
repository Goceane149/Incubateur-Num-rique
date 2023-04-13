import React from 'react';
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { isAdmin, selectIsLogged, signOut } from '../../redux-store/authenticationSlice';
import { clearUser } from '../../redux-store/userSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";

const Header = () => {
    const Navigate = useNavigate();
    const isLoggued = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const admin = useSelector(isAdmin);
    

    if (!admin) return null;
    //console.log(admin);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-row w-full bg-Teal h-24 text-center items-center'>
            <div>
                <button
                    onClick={() => {dispatch(signOut())
                                    dispatch(clearUser())}}
                    >
                    <RxAvatar className='text-Whitesmoke text-6xl ml-2 mr-10' />
                </button>
            </div>
            <div className='text-Whitesmoke text-3xl'>
                {isLoggued.isAuthenticated === true ? (
                    <div className="">Bonjour {user.prenom} !</div>
                ) : (
                    Navigate('/Login')
                )}
            </div>
        </div>
    );
}

export default Header;