import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import axios from 'axios';
import { useSelector } from 'react-redux';

// import { ROLE_ADMIN } from '../constants/rolesConstant';
// import { URL_ADMIN_HOME } from '../constants/urls/urlFrontEnd';
// import { selectHasRole } from '../redux-store/authenticationSlice';
// import Login from '../components/account/Login';

const UnregisteredHomeView = () => {
  const user = useSelector((state) => state.auth);
  //   const navigate = useNavigate();

  let lastTrajets = [
    { name: 'Harold', trajetDepart: 'Lille', trajetArrivee: 'Paris' },
    { name: 'Theo', trajetDepart: 'St-Omer', trajetArrivee: 'Lille' },
    {
      name: 'Jimmy',
      trajetDepart: 'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson',
      trajetArrivee: 'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson',
    },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
  ];

  let lastTrajetsDisplayer = () => {
    return lastTrajets.map((trajet) => (
      <Card
        conducteur={trajet.name}
        depart={trajet.trajetDepart}
        destination={trajet.trajetArrivee}
      />
    ));
  };

  return (
    <>
      <div className="containerFull">
        <div className="flex justify-end bg-slate-200 ">
          <img src="src/app/assets/img/accueil.png" alt="logo" />
        </div>
        <div className="flex flex-col bg-blueBg py-14">
          <div className="mb-14 text-center text-white mt-0">
            <h1 className="text-5xl text-bold ">
              Découvrez les offres de trajets de nos{' '}
              <span className="text-[#b2ffa6]">utilisateurs</span>
            </h1>
          </div>

          <div className="grid grid-cols-[40%,60%] w-95 m-autoX">
            <div className="m-autoX  bg-lightBlue h-490 w-740 flex justify-center items-center rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-3xl">
              <form className="flex flex-col items-center">
                <div className="flex items-center w-400 justify-between mb-8">
                  <label
                    className="font-bold text-xl text-white "
                    htmlFor="from"
                  >
                    Départ :
                  </label>
                  <input
                    className="rounded-3xl border-0"
                    placeholder="Votre départ..."
                    type="text"
                    id="from"
                    name="from"
                  />
                </div>
                <div className="flex items-center w-400 justify-between mb-8">
                  <label className="font-bold text-xl text-white" htmlFor="to">
                    Destination :
                  </label>
                  <input
                    className="rounded-3xl border-0"
                    placeholder="Votre destination..."
                    type="text"
                    id="to"
                    name="to"
                  />
                </div>
                <div className="flex items-center w-400 justify-between mb-8">
                  <label className="font-bold text-xl text-white" htmlFor="to">
                    Date :
                  </label>
                  <input
                    className="rounded-3xl border-0 shadow-inner"
                    placeholder="Votre date..."
                    type="text"
                    id="to"
                    name="to"
                  />
                </div>
                <input
                  className="bg-[#7ec573] hover:bg-[#56b448] w-80 h-12 rounded text-white text-2xl font-bold
                             mt-8 cursor-pointer shadow-md "
                  type="submit"
                  value="Rechercher un trajet"
                />
              </form>
            </div>

            <ul className="w-800 m-auto">{lastTrajetsDisplayer()}</ul>
          </div>
        </div>{' '}
        <div className="order-3 flex items-center h-480 bg-[#c3eded]">
          <div className="flex justify-between items-center  w-4/5 m-auto ">
            <img
              className="m-auto h-72 w-72 min-w-fit  rounded-full"
              src="src/app/assets/img/50point.png"
              alt="50point"
            />

            <div className="text-6xl text-lightBlue font-bold w-3/5 m-autoX">
              <span className="text-6xl font-bold text-[#56b448]">
                GreenRide
              </span>{' '}
              est un site de covoiturage utilisant un système de
              <span className="ml-4 bg-[#56b448] text-white font-bold p-2 text-4xl rounded-tl-3xl rounded-br-3xl">
                Token
              </span>{' '}
            </div>
            <div className="m-auto">
              <button className="buttonEnsavoir text-3xl text-white py-2 px-4 w-52 h-20 rounded-full bg-[#7EC573] hover:bg-[#56b448]">
                En savoir +
              </button>
            </div>
          </div>
        </div>
        <div className="order-4 flex h-800 bg-blueBg font-bold w-full justify-end">
          <div className="flex items-center justify-center text-6xl">
            <h1 className="text-white w-4/5">
              Des trajets partagés pour un monde plus
              <span className="text-[#b2ffa6]"> durable</span>
            </h1>
          </div>

          <img
            src="src/app/assets/img/section2accueil.png"
            className="h-800 "
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default UnregisteredHomeView;
