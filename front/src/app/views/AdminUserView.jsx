import {
  faCakeCandles,
  faCarSide,
  faDharmachakra,
  faHouse,
  faMusic,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BanPopUp from '../components/Popups/BanPopUp';
import axios from 'axios';
import { URL_BACK } from "../constants/urls/urlBackEnd";

const AdminUserView = () => {
  const [rides, setRides] = useState([]);
  const [user, setUser] = useState({});
  const [banActive, setBanActive] = useState(false);

  const navigate = useNavigate();
  const userId = window.location.href.split('/')[5];

  useEffect(() => {
    axios
      .get(URL_BACK + '/api/trajets')
      .then((res) => setRides(res.data['hydra:member'].reverse()));
    axios
      .get(URL_BACK + `/api/users/${userId}`)
      .then((res) => setUser(res.data));
  }, []);

  let lastTrajetsDisplayer = () => {
    const filter = rides.filter((ride) => ride.id_account.id === user.id);
    if (filter.length > 0) {
      return(filter.slice(0, 10).map((ride, index) => (
        <li className="flex items-center text-white w-full my-10" key={index}>
          <FontAwesomeIcon className="h-8" icon={faDharmachakra} />
          <div className="grid grid-cols-[35%,30%,35%] w-full">
            <div className="text-center m-auto">
              <p className="font-bold">{ride.depart}</p>
              <p className=" font-bold ">{ride.depart_hour}</p>
            </div>
            <div>
              <p className="text-center mb-2">{ride.depart_date}</p>
              <div className="arrow" />
            </div>

            <p className="pt-5 mx-auto pl-10 font-bold px-4">
              {ride.destination}
            </p>
          </div>
        </li>))) 
    }else{
      return <p className="pt-5 mx-auto pl-10 font-bold text-2xl px-4">Cet utilisateur n'a proposé aucun trajet</p>
    }
  };

  let calculateAge = (date) => {
    var formattedDate = date.split('-');
    var birthdateTimeStamp = new Date(
      formattedDate[2],
      formattedDate[1],
      formattedDate[0]
    );
    var currentDate = new Date().getTime();
    var difference = currentDate - birthdateTimeStamp;
    var currentAge = Math.floor(difference / 31557600000);
    return currentAge;
  };

  return (
    <div className="relative">
      {banActive ? (
        <BanPopUp setActive={setBanActive} user_signal={user} />
      ) : null}
      <div
        className={
          banActive
            ? 'h-[90vh] bg-[#04ACBE] text-white flex justify-center items-center px-12  z-0 bg-white-500 opacity-50'
            : 'h-[90vh] bg-[#04ACBE] text-white flex justify-center items-center px-12   '
        }
      >
        <div className="grid grid-cols-[1fr,40%] relative">
          <div className="absolute left-[50px] top-[25px]">
            <button className="w-full bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 block  rounded cursor-pointer my-4">
              Contacter
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 tracking-wider text-white font-extrabold py-2 px-4 w-full rounded block  cursor-pointer my-4"
              onClick={() => setBanActive(true)}
            >
              Bannir
            </button>
          </div>
          <div className="flex items-center bg-blueBg p-8 rounded-l ">
            <div>
              <div className="text-white font-bold">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon className="text-2xl" icon={faUser} />
                  <p className="ml-3 text-2xl">
                    {user.prenom ? user.prenom + ' ' + user.nom : null}{' '}
                  </p>
                </div>

                <div className="flex items-center justify-center ">
                  <div className="flex justify-end items-center w-[170px]">
                    <FontAwesomeIcon
                      className="text-2xl"
                      icon={faCakeCandles}
                    />
                    <p className="ml-3 text-2xl">
                      {user.date_naissance
                        ? calculateAge(user.date_naissance) + ' ' + 'ans'
                        : null}
                    </p>
                  </div>
                  <img
                    className="imgProfil h-40 my-4 w-40 rounded-full m-6"
                    src={user && user.img_profil ? user.img_profil : '/src/app/assets/img/avatar.png'}
                    alt=""
                  />
                  <div className="flex items-center w-[170px]">
                    <FontAwesomeIcon className="text-2xl" icon={faHouse} />
                    <p className="ml-3 text-2xl">
                      {user.ville ? user.ville : null}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon className="text-2xl" icon={faMusic} />
                  <p className="ml-3 text-2xl"></p>
                </div>
              </div>

              <div className="text-white text-center w-2/3 my-8 mx-auto rounded">
                {user.description ? user.description : null}
              </div>

              <div>
                <div className="text-center text-white font-bold mb-2">
                  <FontAwesomeIcon
                    className="text-3xl w-full mx-auto"
                    icon={faCarSide}
                  />
                  <p>Renault 21</p>
                </div>

                <ul className="flex justify-between rounded mx-auto w-2/3 max-w-2/3bg-white">
                  <li className="">
                    <img src="/src/app/assets/img/renault21.png" />
                  </li>
                  <li>
                    <img src="/src/app/assets/img/renault21.png" />
                  </li>
                  <li>
                    <img src="/src/app/assets/img/renault21.png" />
                  </li>
                  <li>
                    <img src="/src/app/assets/img/renault21.png" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blueBg p-8 border-l-4 w-full rounded-r">
            <h4 className="bg-[#7EC472] text-white w-fit px-10 py-2  rounded mx-auto mb-8">
              Historique des trajets
            </h4>
            <ul className="w-full overflow-y-auto max-h-[57vh]">
              {lastTrajetsDisplayer()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserView;
