import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from '../components/Page/TextField';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { signIn } from '../redux-store/authenticationSlice';
import Button from "../components/FormComponents/Button";
import Input from "../components/FormComponents/Input";

function FormInscription() {
  const validate = Yup.object().shape({
    nom: Yup.string()
        .max(15, '*Le nom ne peut excéder 15 caractères')
        .matches(/^[a-zA-Zà-ù\-]+$/, '*Le nom ne doit comporter que des lettres')
        .required('*Ce champ ne peut être vide'),
    prenom: Yup.string()
        .max(20, '*Le prénom ne peut excéder 20 caractères')
        .matches(/^[a-zA-Zà-ù\-]+$/, '*Le prénom ne doit comporter que des lettres')
        .required('*Ce champ ne peut être vide'),
    email: Yup.string()
        .email('*Le mail est invalide !')
        .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,'*Le mail est invalide !')
        .required('*Ce champ ne peut être vide'),
    password: Yup.string()
        .min(8, '*Le mot de passe doit comporter 8 caractères minimum')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            '*Le mot de passe doit comporter 1 chiffre, 1 majuscule et 1 caractère spécial')
        .required('*Ce champ ne peut être vide'),
    cpassword: Yup.string()
        .oneOf(
            [Yup.ref('password'), null],
            '*Les mots de passe ne correspondent pas !'
        )
        .required('*Les mots de passe ne correspondent pas !'),
  });

  let navigate = useNavigate();

  return (
    <>
      <div className="container1 flex bg-Teal">
        <div className="container2 w-2/3 flex justify-center items-center">
          <Formik
            initialValues={{
              nom: '',
              prenom: '',
              email: '',
              password: '',
              cpassword: '',
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              let user = {
                email: values.email,
                password: values.password,
                nom: values.nom,
                prenom: values.prenom,
                ville: '',
                cp: 0,
                adresse: '',
                tokens: 50,
                silence: '',
                dateNaissance: '',
              };
              axios
                .post('https://127.0.0.1:8000/api/users', user)
                .then((res) => {
                  if (res.status === 201 && res.data) {
                    navigate('/Login');
                  }
                });
            }}
          >
            <div className="h-[84vh] flex flex-col text-center w-full rounded-lg bg-Teal p-6">
              <h1 className="text-Whitesmoke font-bold mb-4">
                Inscription
              </h1>
              <Form className="mt-2 mb-2 w-full max-w-full">
                <div className="test flex flex-col justify-center items-center mr-32">
                  <Input
                      label="Nom :"
                      name="nom"
                      type="text"
                      width=""
                  />
                  <Input
                      label="Prénom :"
                      name="prenom"
                      type="text"
                      width=""
                  />
                  <Input
                      label="Email :"
                      name="email"
                      type="email"
                      width=""
                  />
                  <Input
                      label="Mot de passe :"
                      name="password"
                      type="text"
                      width=""
                  />
                  <Input
                      label="Confirmer le mot de passe :"
                      name="cpassword"
                      type="text"
                      width=""
                  />
                </div>
                <div className="flex justify-center items-center">
                  <input
                      className="mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]
                                        border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none"
                      type="checkbox"
                      value=""
                  />
                  <label
                      className="items-center text-Whitesmoke inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="conditions"
                  >
                    En vous inscrivant, vous acceptez les{' '}
                    <span className="underline font-bold">
                      conditions d'utilisations
                    </span>
                  </label>
                </div>
                <div className="btn-inscription mt-4 mb-4">
                  <Button children="Inscription"/>
                  <hr className="w-2/3 mt-4 m-autoX" />
                </div>
              </Form>

              <div className="btn-connexion mb-2">
                <p className="text-Whitesmoke mb-2">
                  Vous possédez déjà un compte ?
                </p>
                <NavLink to={'/Login'}>
                  <Button children="Connexion"/>
                </NavLink>
              </div>
            </div>
          </Formik>
        </div>
        <div className="w-1/3">
          <img
              src="src/app/assets/img/login.png"
              alt=""
              className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default FormInscription;
