import React, { useEffect, useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { TextField } from '../components/Page/TextField';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import Button from "../components/FormComponents/Button";
import {Input} from "../components/FormComponents/Input";


function FormInscription() {
    const validate = Yup.object().shape({
        nom: Yup.string()
            .max(15, '*Le nom ne peut excéder 15 caractères')
            .matches(/^[a-zA-Z\-]+$/, '*Le nom ne doit comporter que des lettres')
            .required('*Ce champ ne peut être vide'),
        prenom: Yup.string()
            .max(20, '*Le prénom ne peut excéder 20 caractères')
            .matches(/^[a-zA-Z\-]+$/, '*Le prénom ne doit comporter que des lettres')
            .required('*Ce champ ne peut être vide'),
        email: Yup.string()
            .email('*Le mail est invalide !')
            .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, '*Le mail est invalide !')
            .required('*Ce champ ne peut être vide'),
        telephone: Yup.string()
            .max(12, '*Le numéro de téléphone ne peut dépasser 12 chiffres !')
            .matches(/^[0-9\-]+$/,
                '*Le numéro de téléphone ne peut comporter que des chiffres')
            .required('*Ce champ ne peut être vide'),
        message: Yup.string()
            .min(1, '*Ce champ ne peut être vide')
            .max(500, '*Le message ne peut dépasser 500 caractères !')
            .required('*Ce champ ne peut être vide'),
    });

    return (
        <>
            <div className="container1 flex bg-Teal">
                <div className="container2 w-2/3 flex justify-center items-center">
                    <Formik
                        initialValues={{
                            nom: '',
                            prenom: '',
                            email: '',
                            telephone: '',
                            message: '',
                        }}
                        validationSchema={validate}
                    >
                        <div className="h-[84vh] flex flex-col text-center w-full bg-Teal p-6">
                            <h1 className="text-Whitesmoke font-bold mt-12 mb-4">
                                Contact
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
                                        label="Téléphone :"
                                        name="telephone"
                                        type="text"
                                        width=""
                                    />
                                    <div className="containerText w-full max-w-2xl">
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="span md:w-1/3">
                                                <span className="block text-[#FFFFFF] font-bold md:text-right mb-1 md:mb-0 pr-4">
                                                    Message :
                                                </span>
                                            </div>
                                            <div className="textarea md:w-2/3 ">
                                                <Field
                                                    as="textarea"
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-3xl w-full py-2
                                                    px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#7cc474]
                                                    border-transparent focus:ring-0"
                                                    id="info"
                                                    name="info"
                                                    rows="4"
                                                    cols="80"
                                                    maxLength="350"
                                                ></Field>
                                                <TextField name="message" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-inscription mt-4 mb-4">
                                    <Button children="Envoyer"/>
                                </div>
                            </Form>
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