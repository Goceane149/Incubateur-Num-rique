import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_BACK } from '../constants/urls/urlBackEnd';

const AdminHomeView = () => {
    const [userAdmin, setUserAdmin] = useState([]);
    const [userUtilisateur, setUserUtilisateur] = useState([]);
    const [trajets, setTrajets] = useState([]);
    const [alert, setAlert] = useState([]);
    const [contact, setContact] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            const resultUserAdmin = await axios.get(URL_BACK + '/get/user_admin');
            const resultUserUser = await axios.get(URL_BACK + '/get/user_user');
            const resultAlert = await axios.get(URL_BACK + '/api/alerts');
            const resultContact = await axios.get(URL_BACK + '/api/contacts');
            const resultTrajets = await axios.get(URL_BACK + '/api/trajets');

            setUserAdmin(resultUserAdmin.data);
            setUserUtilisateur(resultUserUser.data);
            setTrajets(resultTrajets.data['hydra:member'].reverse());
            setAlert(resultAlert.data['hydra:member']);
            setContact(resultContact.data['hydra:member']);
            console.log(resultUserAdmin, resultUserUser);
        }
        fetchUser();
    }, [])

    return (
        <div className="h-[90vh] w-full bg-Moonstone">
            <h1 className="text-center mb-8 p-2 text-white">Tableau de bord</h1>
            <div className="flex w-full justify-around items-center pb-8 h-fit my-auto">
                <div className="bg-blueBg w-2/12 h-72 overflow-y-auto py-3 px-4 text-center items-center rounded">
                    <h4 className="text-white mb-3">Administrateurs</h4>
                    <div className="bg-MintGreen h-52 rounded">
                        {userAdmin != 0 ? (
                            <div className="flex h-52 justify-center items-center">
                                <div className='w-full'>
                                    <div className='text-5xl font-bold'>
                                        {userAdmin.length}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-52 justify-center items-center">
                                Chargement...
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-blueBg w-2/12 h-72 overflow-y-auto py-3 px-4 text-center items-center rounded">
                    <h4 className="text-white mb-3">Utilisateurs</h4>
                    <div className="bg-MintGreen h-52 rounded">
                        {userAdmin != 0 ? (
                            <div className="flex h-52 justify-center items-center">
                                <div className='w-full'>
                                    <div className='text-5xl font-bold'>
                                        {userUtilisateur.length}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-52 justify-center items-center">
                                Chargement...
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-blueBg w-2/12 h-72 overflow-y-auto py-3 px-4 text-center items-center rounded">
                    <h4 className="text-white mb-3">Alertes</h4>
                    <div className="bg-MintGreen h-52 rounded">
                        {alert != 0 ? (
                            <div className="flex h-52 justify-center items-center">
                                <div className='w-full'>
                                    <div className='text-5xl font-bold'>
                                        {alert.length}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-52 justify-center items-center text-3xl font-bold">
                                Aucune alertes
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-blueBg w-2/12 h-72 overflow-y-auto py-3 px-4 text-center items-center rounded">
                    <h4 className="text-white mb-3">Messages</h4>
                    <div className="bg-MintGreen h-52 rounded">
                        {contact != 0 ? (
                            <div className="flex h-52 justify-center items-center">
                                <div className='w-full'>
                                    <div className='text-5xl font-bold'>
                                        {contact.length}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-52 justify-center items-center">
                                Chargement...
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex bg-blueBg w-8/12 h-350 overflow-y-auto mx-auto p-4 justify-center rounded">
                <div className='text-Whitesmoke'>
                    <h4 className="mb-4 text-center">Nouveaux trajets</h4>
                    <table className='table-auto mb-4 border-collapse border border-slate-400'>
                        <thead>
                            <tr>
                                <th className='border border-slate-300 px-8 py-2'>Date</th>
                                <th className='border border-slate-300 px-8 py-2'>Utilisateur</th>
                                <th className='border border-slate-300 px-8 py-2'>Départ</th>
                                <th className='border border-slate-300 px-8 py-2'>Destination</th>
                                <th className='border border-slate-300 px-8 py-2'>Places disponibles</th>
                                <th className='border border-slate-300 px-8 py-2'>Notes utilisateurs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trajets != 0 ? (
                                trajets.slice(0,5).map((trajet) => (
                                    <tr>
                                        <td className='border border-slate-300 px-8 py-2 text-center'>{trajet["depart_date"]}</td>
                                        <td className='border border-slate-300 px-8 py-2 text-center'>{trajet["id_account"].nom} {trajet["id_account"].prenom}</td>
                                        <td className='border border-slate-300 px-8 py-2 text-center'>{trajet.depart}</td>
                                        <td className='border border-slate-300 px-8 py-2 text-center'>{trajet.destination}</td>
                                        <td className='border border-slate-300 px-8 py-2 text-center'>{trajet.places}</td>
                                        <td className='border border-slate-300 px-8 py-2 text-center'>{trajet.notes}</td>
                                    </tr>
                                ))
                            ) : (
                                <div className="flex h-52 justify-center items-center">
                                    Chargement...
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default AdminHomeView;
