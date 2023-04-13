import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAdmin, selectIsLogged, signOut } from '../../redux-store/authenticationSlice';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";
import Sidebar from './Sidebar';


const Navbar = () => {
  const isLoggued = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const admin = useSelector(isAdmin);

  return (
    <div>
      {admin ? (
          <div>
            <Header />
            <Sidebar />
          </div>
        ) : (
          <div className="items-center bg-[#04ADBF]">
            <div className="flex items-center justify-around h-[8vh] w-[95%] m-autoX">
              <NavLink to="/">
                <img
                  className="w-3/4"
                  src="/src/app/assets/img/Rectangle54.png"
                  alt="logo"
                />
              </NavLink>
              <div className="flex justify-around w-5/12 ">
                <NavLink
                  className="text-xl font-bold font-roboto text-white hover:text-[#b2ffa6] my-auto"
                  to="/"
                >
                  Accueil
                </NavLink>

                <NavLink
                  className="text-xl font-bold font-roboto text-white hover:text-[#b2ffa6] my-auto"
                  to="/a-propos"
                >
                  A propos
                </NavLink>

                {isLoggued.isAuthenticated === true ? (
                    <NavLink
                        className="text-xl font-bold font-roboto text-white hover:text-[#b2ffa6] my-auto"
                        to="/ride/post"
                    >
                      Proposer trajet
                    </NavLink>
                ) : (
                    <NavLink
                        className="hidden text-xl font-bold font-roboto text-white hover:text-[#b2ffa6] my-auto"
                        to="/login"
                    >
                      Proposer trajet
                    </NavLink>
                )}

                <NavLink
                  className="text-xl font-bold font-roboto text-white hover:text-[#b2ffa6] my-auto"
                  to="/ride/search"
                >
                  Recherche
                </NavLink>

                <NavLink
                    className="text-xl font-bold font-roboto text-white hover:text-[#b2ffa6] my-auto"
                    to="/Contact"
                >
                  Nous contacter
                </NavLink>
              </div>

              {isLoggued.isAuthenticated === true ? (
                <div>
                  <button
                    className="buttonRegister px-4 py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-200 transition"
                    onClick={() => dispatch(signOut())}
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <div className="shadow-xl">
                  <NavLink to={'/Login'}>
                    <button className="buttonLogin font-bold px-4 py-2 rounded-l-xl text-white hover:bg-[#56b448] m-0 transition bg-[#7cc474]">
                      Se connecter
                    </button>
                  </NavLink>

                  <NavLink to={'Inscription'}>
                    <button className="buttonRegister px-4 py-2 rounded-r-xl bg-neutral-50 hover:bg-neutral-200 transition">
                      S'inscrire
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          )}
        </div>
  );
};

export default Navbar;
