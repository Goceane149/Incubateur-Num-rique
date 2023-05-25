import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { URL_BACK } from '../constants/urls/urlBackEnd';
import axios from 'axios';
import Button from '../components/Button';
import Notif from '../components/Notif';

const MakeAlertView = () => {
  const [trajet, setTrajet] = useState({});
  const [alertObject, setAlertObject] = useState('default');
  const [notifTheme, setNotifTheme] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const { id } = useParams();
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(URL_BACK + '/api/trajets/' + id)
      .then((resTrajet) => {
        setTrajet(resTrajet.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createAlert = (e) => {
    e.preventDefault();
    let alert = {
      date: new Date().toLocaleDateString('fr-FR'),
      trajet: `/api/trajets/${trajet.id}`,
      commentaire: commentaire,
      userPlaint: `/api/users/${currentUser.id}`,
      userSignal: `/api/users/${trajet['id_account'].id}`,
      reason: alertObject,
    };
    console.log(alert);
    axios.post(URL_BACK + '/api/alerts', alert).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setNotifTheme('alert');
      } else {
        setNotifTheme('alert-error');
      }
    });
  };

  return (
    <div className=" bg-Teal h-[84vh] flex items-center">
      <div className=" w-[500px] m-auto bg-Moonstone text-white p-8 rounded-xl text-center flex flex-col relative border-4">
        {notifTheme === 'alert' ? (
          <Notif theme={notifTheme} setNotifTheme={setNotifTheme} />
        ) : null}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full object-cover mr-3"
                src={
                  trajet['id_account'] && trajet['id_account'].img_profil
                    ? trajet['id_account'].img_profil
                    : null
                }
                alt="id"
              />
              <div className="text-2xl font-bold">
                {trajet['id_account'] && trajet['id_account'].nom
                  ? trajet['id_account'].prenom + ' ' + trajet['id_account'].nom
                  : ''}
              </div>
            </div>

            <p className="font-bold text-xl">
              {trajet.depart_date ? trajet.depart_date : null}
            </p>
          </div>

          <div className=" mt-5 ">
            <div className="grid grid-cols-[40%,20%,40%]">
              <div className="text-left">
                <p className="font-bold">{trajet.depart}</p>
                <p className=" font-bold ">{trajet.depart_hour}</p>
              </div>
              <div className="arrow" />
              <p className=" font-bold text-right my-auto">
                {trajet.destination}
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => createAlert(e)}>
          <label className="font-bold text-xl w-full">
            Veuillez indiquer l'objet du signalement
          </label>
          <select
            className="text-black font-bold text-lg cursor-pointer my-4 w-full mx-auto rounded"
            onChange={(e) => setAlertObject(e.target.value)}
            required
          >
            <option className="text-black font-bold text-lg" value=""></option>
            <option className="text-black font-bold text-lg" value="insultes">
              Insultes
            </option>
            <option className="text-black font-bold text-lg" value="retard">
              Retard
            </option>
            <option
              className="text-black font-bold text-lg"
              value="conducteur pas venu"
            >
              Le conducteur n'est pas venu
            </option>
            <option
              className="text-black font-bold text-lg"
              value="conduite dangereuse"
            >
              Conduite dangereuse
            </option>
            <option
              className="text-black font-bold text-lg"
              value="passager déposé au mauvais endroit"
            >
              Le conducteur ne m'a pas déposé au bon endroit
            </option>
            <option className="text-black font-bold text-lg" value="autre">
              Autre
            </option>
          </select>
          {alertObject === 'default' ||
          alertObject === 'insultes' ||
          alertObject === 'retard' ||
          alertObject === 'conducteur pas venu' ||
          alertObject === 'conduite dangereuse' ||
          alertObject === 'passager déposé au mauvais endroit' ? null : (
            <div>
              {' '}
              <label className="font-bold text-lg cursor-pointer my-4 w-full mx-auto rounded">
                Objet du signalement
              </label>
              <input
                type="text"
                maxLength={50}
                className="text-black font-bold text-lg my-4 w-full"
                onChange={(e) => setAlertObject(e.target.value)}
                required
              />
            </div>
          )}
          <label className="font-bold text-xl mb-4 block">
            Detail du signalement
          </label>
          <textarea
            maxLength={255}
            className="text-black font-bold text-lg h-[190px] resize-none w-full rounded"
            onChange={(e) => setCommentaire(e.target.value)}
          ></textarea>

          <input
            type="submit"
            value="Valider"
            className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded w-1/2 mx-auto cursor-pointer mt-8"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAlertView;
