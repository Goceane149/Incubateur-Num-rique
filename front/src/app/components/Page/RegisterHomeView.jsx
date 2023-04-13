import { Form } from 'formik';
import React, { useEffect, useState } from 'react';
import InputT from '../InputT';
import RideResultCard from '../RideResultCard';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import Chat from '../chat/Chat';
import axios from 'axios';

const RegisterHomeView = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios
      .get('https://127.0.0.1:8000/api/trajets')
      .then((res) => setRides(res.data['hydra:member'].reverse()));
  }, []);

  const validationSearch = Yup.object().shape({
    departDate: Yup.date().required('Veuillez indiquer une date de départ'),
    lieuDepart: Yup.string()
      .matches(/^[a-zA-Z\-]+$/, 'Veuillez indiquer un lieu de départ correct')
      .required('Veuillez indiquer un lieu de départ'),
    destination: Yup.string()
      .matches(/^[a-zA-Z\-]+$/, 'Veuillez indiquer une destination correcte')
      .required('Veuillez indiquer une destination'),
  });
  let lastTrajets = [
    { name: 'Harold', trajetDepart: 'Lille', trajetArrivee: 'Paris' },
    { name: 'Theo', trajetDepart: 'St-Omer', trajetArrivee: 'Lille' },
    {
      name: 'Jimmy',
      trajetDepart: 'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson',
      trajetArrivee: 'Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson',
    },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
    { name: 'Frederic', trajetDepart: 'Paris', trajetArrivee: 'Toulouse' },
  ];

  let lastTrajetsDisplayer = () => {
    return rides.map((ride) => (
      <RideResultCard
        depart={ride.depart}
        destination={ride.destination}
        conducteur={ride.conducteur}
        departHour={ride.departHour}
        destinationHour={ride.destinationHour}
        date={ride.depart_date}
      />
    ));
  };

  return (
    <div className="relative">
      <div className="flex justify-end bg-slate-200 ">
        <img src="src/app/assets/img/accueil.png" alt="logo" />
      </div>
      <Chat />
      <div className="bg-[#047C89] py-24 text-center">
        <h2 className="text-white font-bold mb-14">
          Rechercher le trajet qui vous correspond
        </h2>
        <div>
          <Formik
            initialValues={{
              departDate: '',
              lieuDepart: '',
              destination: '',
            }}
            validationSchema={validationSearch}
            onSubmit={(values) => {
              console.log('lolol');
              alert(JSON.stringify(values));
            }}
          >
            <Form className=" w-2/3 m-autoX mb-24 bg-[#04BEAC] p-8 rounded-md">
              <div className="flex justify-around  mb-12">
                <div className="flex flex-col">
                  <label className="mb-4 text-white text-xl font-bold">
                    Depart
                  </label>
                  <InputT type="text" name="lieuDepart" placeholder="Lille" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-4 text-white text-xl font-bold">
                    Destination
                  </label>
                  <InputT type="text" name="destination" placeholder="Paris" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-4 text-white text-xl font-bold">
                    Date
                  </label>
                  <InputT type="date" name="departDate" />
                </div>
              </div>
              <div className="flex justify-around w-full">
                <input
                  type="submit"
                  className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer w-1/3"
                  value="Rechercher"
                />
                <NavLink
                  to="/ride/search"
                  className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer w-1/3"
                >
                  Recherche avancée
                </NavLink>
              </div>
            </Form>
          </Formik>
        </div>
        <ul className="w-1/2 m-autoX">{lastTrajetsDisplayer()}</ul>
      </div>
    </div>
  );
};

export default RegisterHomeView;
