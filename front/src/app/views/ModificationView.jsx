import React, { useEffect } from 'react';
import '../assets/styles/components/modifierView.css';
import {Formik, Form, Field} from 'formik';
import { Input } from '../components/FormComponents/Input';
import * as Yup from 'yup';
import { useState } from 'react';
import Button from "../components/FormComponents/Button";

const ModificationView = () => {
    const validate = Yup.object({
        adresse: Yup.string()
            .min(1, '*Doit contenir 1 caractère ou plus')
            .max(50, '*Doit contenir 50 caractères ou moins')
            .required('*Adresse requise'),
        codepostal: Yup.string()
            .matches(
                /^[0-9]{5}$/,
                '*Le code postal doit contenir exactement 5 chiffres'
            )
            .required('*Code postal requis'),
        ville: Yup.string()
            .min(1, '*Doit contenir 1 caractère ou plus')
            .max(50, '*Doit contenir 50 caractères ou moins')
            .required('*Ville requise'),
        password: Yup.string()
            .min(6, '*Doit contenir 6 caractères ou plus')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                '*Le mot de passe doit comporter 1 chiffre, 1 majuscule et 1 caractère spécial')
            .required('*Mot de passe requis'),
        confirmpassword: Yup.string()
            .oneOf(
                [Yup.ref('password'), null],
                '*Les mots de passe doivent être identiques'
            )
            .required('*Confirmer votre mot de passe'),
    });

    const [images, setImages] = useState([]);
    const [url, setUrl] = useState([]);
    const [imgPreviewer, setImgPreviewer] = useState();

    let imgConverter = (e) => {
        let imagesArray = images;
        let UrlArray = url;
        imagesArray.push(e);
        UrlArray.push(URL.createObjectURL(e));
        setImages(imagesArray);
        setUrl(UrlArray);
        let imgPreview = url.map((img) => (
            <div className="imgContainer w-44 h-44 ml-5">
                <img className="w-44 h-44 max-w-none max-h-44 object-cover inline-block" src={img} alt="images" />
            </div>
        ));
        setImgPreviewer(imgPreview);
    };

    // const [image, setImage] = useState("src/app/assets/img/profil.jpg");
    // const [profilUrl, setprofilUrl] = useState([]);
    //
    // const handleImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         let img = event.target.files[0];
    //         setImage(img)
    //         setprofilUrl(URL.createObjectURL(img));
    //     }
    // };

    const [imageSrc, setImageSrc] = useState('src/app/assets/img/profil.jpg');

    function handleImageChange(event) {
        const newProfileImage = event.target.files[0];
        setImageSrc(URL.createObjectURL(newProfileImage));
    }

    return (
        <>
            <div className="container1 w-full flex min-h-[84vh] bg-[#04BFAD]">
                <div className="container2 mt-12 mb-12 w-full">
                    <div className="flex h-full items-center">
                        <div className="container-photo w-1/2 flex items-center h-full flex-col gap-y-3 ml-12 pt-20">
                            <div className="box-img w-72 h-72 rounded-full bg-red-500 flex justify-center">
                                {imageSrc && <img src={imageSrc} className="max-w-full max-h-max rounded-full object-cover" alt="Preview" />}
                            </div>
                            <div className="upload flex align-center justify-center">
                                <div className="upload-file flex items-center justify-center rounded w-50 bg-[#7cc474] hover:bg-[#54b44b] text-white font-extrabold py-2 px-4">
                                    <label
                                        htmlFor="file-input"
                                        className="cursor-pointer flex items-center"
                                    >
                                        <i className="fas fa-camera"></i>
                                        <span className="ml-2 font-bold text-white-700">
                      Changer votre photo
                    </span>
                                    </label>
                                    <input
                                        id="file-input"
                                        type="file"
                                        className="sr-only"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                        </div>
                        {/*    suite*/}
                        <Formik
                            initialValues={{
                                password: "",
                                confirmpassword: "",
                                adresse: "",
                                codepostal: "",
                                ville: "",
                                passager: "",
                                musique:"",
                                silence:"",
                                info:""
                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }
                            }
                        >
                            {formik => (
                                <div className="w-full h-full flex items-center">
                                    <Form>
                                        <Input
                                            margin="56"
                                            label="Changer votre mot de passe :"
                                            name="password"
                                            type="password"
                                        />
                                        <Input
                                            margin="56"
                                            label="Confirmer le mot de passe :"
                                            name="confirmpassword"
                                            type="password"
                                        />
                                        <Input
                                            margin="56"
                                            label="Adresse :"
                                            name="adresse"
                                            type="text"
                                        />
                                        <Input
                                            margin="56"
                                            label="Code postal :"
                                            id="codepostal"
                                            name="codepostal"
                                        />

                                        <Input
                                            margin="56"
                                            label="Ville :"
                                            name="ville"
                                            type="text"
                                        />
                                        <div className="w-full max-w-2xl">
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="md:w-1/3">
                                                <label
                                                    className="block text-[#FFFFFF] font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="passager"
                                                >
                                                    Nombre de passagers :
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <Field
                                                    as="select"
                                                    id="passager"
                                                    name="passager"
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#7cc474] border-transparent focus:ring-0"
                                                >
                                                    <option value="1">1 passager</option>
                                                    <option value="2">2 passagers</option>
                                                    <option value="3">3 passagers</option>
                                                    <option value="4">4 passagers</option>
                                                </Field>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="w-full max-w-2xl">
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="md:w-1/3">
                                                <label
                                                    className="block text-[#FFFFFF] font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="passager"
                                                >
                                                    Style de musique :
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <Field
                                                    as="select"
                                                    id="musique"
                                                    name="musique"
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#7cc474] border-transparent focus:ring-0"
                                                >
                                                    <option value="1">De tout..</option>
                                                    <option value="2">Pop</option>
                                                    <option value="3">Rock</option>
                                                    <option value="4">Electro</option>
                                                </Field>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="w-full max-w-2xl">
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="md:w-1/3">
                                                <label
                                                    className="block text-[#FFFFFF] font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="passager"
                                                >
                                                    Je conduis en silence :
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <Field
                                                    as="select"
                                                    id="silence"
                                                    name="silence"
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#7cc474] border-transparent focus:ring-0"
                                                >
                                                    <option value="1">Non</option>
                                                    <option value="2">Oui</option>
                                                </Field>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="containerText w-full max-w-2xl">
                                            <div className="md:flex md:items-center mb-6">
                                                <div className="span md:w-1/3">
                          <span className="block text-[#FFFFFF] font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Dites quelques mots sur vous (350 caractères max) :
                          </span>
                                                </div>
                                                <div className="textarea md:w-2/3 ">
                          <Field
                              as="textarea"
                              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#7cc474] border-transparent focus:ring-0"
                              id="info"
                              name="info"
                              rows="4"
                              cols="80"
                              maxLength="350"
                          ></Field>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full max-w-2xl">
                                        <div className="upload flex align-center justify-center mb-10">
                                            <div className="upload-file flex items-center justify-center rounded w-50 bg-[#7cc474] hover:bg-[#54b44b] text-white font-extrabold py-2 px-4">
                                                <label
                                                    htmlFor="file-lol"
                                                    className="cursor-pointer flex items-center"
                                                >
                                                    <i className="fas fa-camera"></i>
                                                    <span className="ml-2 font-bold text-white-700">
                            Ajouter photo de ma voiture
                          </span>
                                                </label>
                                                <input
                                                    id="file-lol"
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={(e) => imgConverter(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                        </div>

                                        <div className="test w-full max-w-2xl flex flex-row overflow-x-scroll whitespace-nowrap scrollbar scrollbar-thumb-Mantis scrollbar-track-white scrollbar-rounded-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                            {imgPreviewer}
                                        </div>

                                        <div className="w-full max-w-2xl">
                                            <div className="md:flex md:items-center justify-center gap-x-20 mt-20">
                                                <button
                                                    type="submit"
                                                    className="w-40 bg-[#7cc474] hover:bg-[#54b44b] text-white font-extrabold py-2 px-4 rounded"
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    type="reset"
                                                    className="w-40 bg-[#7cc474] hover:bg-[#54b44b] text-white font-extrabold py-2 px-4 rounded"
                                                >
                                                    Annuler
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModificationView;