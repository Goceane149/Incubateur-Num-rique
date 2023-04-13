import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ROLE_ADMIN } from '../constants/rolesConstant';
import { URL_ADMIN_HOME } from '../constants/urls/urlFrontEnd';
import { selectHasRole } from '../redux-store/authenticationSlice';



/**
 * View/Page Home
 *
 * @author Océane Gontier
 */
const VoirprofilView = () => {
    const isAdmin = useSelector((state) => selectHasRole(state, ROLE_ADMIN));
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const handleClick = () => {
        setMessage('Vous Avez Remercier la personne !');
    };

    return (
        <>

            <div className="flex justify-center items-center h-[84vh] bg-Teal">
                <div className=" bg-Moonstone h-5/6 w-11/12 rounded-lg mx-auto ">
                    <div className="flex h-4/6 w-11/12 rounded-lg mx-auto items-center ">
                        <div className="flex justify-center ">
                            <img className="h-72 items-center rounded-full" src="src/app/assets/img/photoprofil.png" alt="50point"/>
                        </div>
                        <div className="flex w-9/12 h-5/6 ml-16">
                            <div className=" bg-Teal justify-center  w-full mr-8">
                                <div className="flex justify-center mt-8">
                                    <h1 className="text-paragraphe text-Whitesmoke">Jeff TUCHE</h1>
                                    <h1 className="text-paragraphe text-Whitesmoke ml-80"> 48ans </h1>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <h1 className="text-paragraphe text-Whitesmoke">Ville</h1>
                                    <h1 className="text-paragraphe text-Whitesmoke ml-96"> Bouzole </h1>
                                </div>
                                <div className="flex  mt-8">
                                    <h1 className="text-paragraphe text-Whitesmoke ml-11">Écoute Patrick Sébastien</h1>
                                </div>
                                <div className="flex bg-white rounded mx-auto justify-center items-center h-20 w-11/12 mt-10">
                                    <div className="flex items-center">
                                        <h1 className="flex text-paragraphe  ml-3">j'aime Monaco , j'aime les pommes de la terre avec de la samouraï , la sauce mayonnaise qui pique qui pique </h1>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <h1 className="text-paragraphe text-Whitesmoke">Voiture :</h1>
                                    <h1 className="text-paragraphe text-Whitesmoke ml-80"> Renault 21 </h1>
                                </div>
                            </div>
                            <div className="bg-Teal w-full mx-auto">
                                <div className="flex justify-end bg-gris rounded-t-lg w-11/12 h-10 items-center mt-2 mx-auto">
                                    <h1 className="flex text-[30px] mx-auto">Historique des trajets</h1>
                                    <div className="flex">
                                        <div className="flex ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                                            </svg>
                                        </div>
                                        <div className="flex ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                                            </svg>
                                        </div>
                                        <div className="flex ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <h1 className="text-paragraphe text-Whitesmoke">01/03/2023</h1>
                                    <h1 className="text-paragraphe text-Whitesmoke ml-80"> Passager </h1>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <h1 className="text-paragraphe text-Whitesmoke">15/03/2023</h1>
                                    <h1 className="text-paragraphe text-Whitesmoke ml-80"> Conducteur </h1>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <h1 className="text-paragraphe text-Whitesmoke">17/03/2023</h1>
                                    <h1 className="text-paragraphe text-Whitesmoke ml-80"> Passager </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex h-1/4 w-11/12 mx-auto " >
                        <div className=" bg-gris h-5/6 w-7/12 my-auto ">
                            <div className="grid grid-cols-5 gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg"
                                         src="src/app/assets/img/renault21.png"
                                         alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg"
                                         src="src/app/assets/img/renault21.png"
                                         alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg"
                                         src="src/app/assets/img/renault21.png"
                                         alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg"
                                         src="src/app/assets/img/renault21.png"
                                         alt=""/>
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg"
                                         src="src/app/assets/img/renault21.png"
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-Teal h-5/6 w-5/12 ml-2 my-auto ">
                            <p className="  text-center text-paragraphe text-Whitesmoke " >{message}</p>
                            <div className="flex my-auto justify-center items-center h-20 w-11/12 my-auto">

                                <div className=" flex ml-20 justify-center items-center">
                                    <button className="bg-gris text-paragraphe  rounded-lg" onClick={handleClick}>Remercier</button>
                                </div>
                                <div className="flex ml-32 justify-center items-center">
                                    <button className="bg-gris text-paragraphe  rounded-lg">Envoyer un message</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VoirprofilView;