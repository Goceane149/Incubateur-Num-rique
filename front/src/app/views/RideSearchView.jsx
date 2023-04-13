import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../components/Button';
import InputT from '../components/InputT';

const RideSearchView = () => {
  const [trajets, setTrajets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://127.0.0.1:8000/api/trajets')
      .then((res) => setTrajets(res.data['hydra:member'].reverse()));
  }, []);
  ////////SCHEMA DE VALIDATION/////////////////
  const validationSearch = Yup.object().shape({
    departDate: Yup.date().required('Veuillez indiquer une date de départ'),
    departHour: Yup.string()
      .matches(/^([0-2][1-9]:[0-5][0-9])$/)
      .required('Veuillez indiquer une heure de départ'),
    lieuDepart: Yup.string()
      .matches(/^[a-zA-Z\-]+$/, 'Veuillez indiquer un lieu de départ correct')
      .required('Veuillez indiquer un lieu de départ'),
    destination: Yup.string()
      .matches(/^[a-zA-Z\-]+$/, 'Veuillez indiquer une destination correcte')
      .required('Veuillez indiquer une destination'),
    places: Yup.number().default(1).min(1).max(5).required(),
    petitsBagages: Yup.number().default(1).min(1).max(8).required(),
    grandsBagages: Yup.number().default(1).min(1).max(8).required(),
  });

  let ridesDisplayer = () => {
    return trajets.slice(0, 5).map((ride) => (
      <li className="bg-lightBlue rounded-xl grid grid-cols-[1fr,150px] p-1 text-center text-white my-2 ">
        <div className="grid grid-cols-2 grid-rows-2 gap-y-3">
          <div className="flex items-center m-autoX">
            <div className="h-8 w-8 rounded-full bg-red-500 mr-2" />
            <h4 className="text-bold text-xl ">{ride.conducteur}</h4>
          </div>

          <p className="w-fit m-auto">Depart : {ride.depart}</p>
          <p className="w-fit m-auto">{ride.places} tokens</p>
          <p className="w-fit m-auto">Arrivée : {ride.destination}</p>
        </div>
        <div className="h-109 w-147 m-auto bg-red-200 rounded-xl" />
      </li>
    ));
  };
  return (
    <div className="flex justify-center items-center bg-blueBg h-[84vh]">
      <div className="grid grid-cols-2 bg-blueBg w-full">
        <div className="h-740 w-740 m-auto bg-lightBlue text-white p-5 flex flex-col rounded-xl ">
          <h1 className="mb-4 font-bold  text-center text-4xl">
            Rechercher un trajet
          </h1>
          <Formik
            initialValues={{
              departDate: '',
              departHour: '',
              lieuDepart: '',
              destination: '',
              places: 1,
              petitsBagages: 0,
              grandsBagages: 0,
              musique: '',
              notes: '',
            }}
            validationSchema={validationSearch}
            onSubmit={(values) => {
              navigate(
                `/search/results/${values.lieuDepart}/${values.destination}/${values.departDate}/${values.departHour}`
              );
            }}
          >
            <Form className="flex flex-col justify-around h-full ">
              <div>
                <div className="flex justify-between items-center my-2 w-full ">
                  <label className="text-xl font-bold">Départ : </label>
                  <InputT
                    width="3/4"
                    name={'lieuDepart'}
                    id={'lieuDepart'}
                    type="text"
                  />
                </div>
                <div className="text-red-700 text-center mt-4 text-sm font-extrabold flex-row">
                  <ErrorMessage name={'lieuDepart'} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center my-2 w-full ">
                  <label className="text-xl font-bold">Destination : </label>
                  <InputT
                    width="3/4"
                    name={'destination'}
                    id={'destination'}
                    type="text"
                  />
                </div>
                <div className="text-red-700  mt-4 text-center text-sm font-extrabold flex-row">
                  <ErrorMessage name={'destination'} />
                </div>
              </div>

              <div className="flex items-center my-2 w-full " id="places">
                <label className="text-xl w-1/4 font-bold">Places :</label>
                <Field
                  className={
                    'text-black w-20 rounded-3xl border-0 cursor-pointer'
                  }
                  as="select"
                  name="places"
                  id="places"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Field>
              </div>
              <div className="grid grid-cols-2 w-full " id="date-hour">
                <div>
                  <div className="flex justify-between items-center">
                    <label className="text-xl font-bold w-1/2">
                      Date de départ :{' '}
                    </label>
                    <InputT
                      width="2/5 cursor-pointer"
                      name={'departDate'}
                      id={'departDate'}
                      type="date"
                    />
                  </div>

                  <div className="text-red-700  text-sm mt-2 font-extrabold flex-row">
                    <ErrorMessage name={'departDate'} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label className="text-xl font-bold pl-4">
                      Heure de départ :{' '}
                    </label>
                    <InputT
                      width="2/5"
                      name={'departHour'}
                      id={'departHour'}
                      type="time"
                    />
                  </div>

                  <div className="text-red-700 mt-2 text-sm  font-extrabold pl-4 flex-row">
                    <ErrorMessage name={'departHour'} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center my-2 w-full">
                <label className="text-xl font-bold">Bagages</label>
                <div className="flex between items-center w-4/5 bg-slate-400 rounded-3xl">
                  <div className="flex items-center border-2 rounded-3xl pl-4">
                    <label className="mr-4">Petits</label>
                    <Field
                      className={
                        'w-24 text-black  rounded-3xl cursor-pointer border-transparent focus:border-[#7cc474] '
                      }
                      as="select"
                      name="petitsBagages"
                      id="petitsBagages"
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                    </Field>
                  </div>
                  <div
                    className="flex w-full items-center border-2 rounded-3xl pl-4"
                    id="grandBagage"
                  >
                    <label className="mr-4 w-full">Grands</label>
                    <Field
                      className={
                        'w-36 text-black border-0 rounded-3xl cursor-pointer'
                      }
                      as="select"
                      name="grandsBagages"
                      id="grandsBagages"
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </Field>
                  </div>
                </div>
              </div>

              <Button type="submit" children="Rechercher" />
            </Form>
          </Formik>
        </div>
        <div className="w-740 bg-lightBlue m-auto rounded-xl p-4 ">
          <div className="bg-red-200 m-autoX mb-4 rounded-xl" />
          <div className="p-1 bg-blueBg">
            <h4 className="text-2xl text-center text-white font-bold bg-lightBlue rounded mb-2 p-2">
              Derniers trajets disponibles
            </h4>
            <div className="ride-container">
              <ul className="overflow-y-scroll w-9/10 m-autoX h-350 ">
                {ridesDisplayer()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideSearchView;
