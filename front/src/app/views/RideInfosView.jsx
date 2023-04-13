import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { Icon } from 'leaflet';
import MapRouting from "../components/leaflet/MapRouting";
import axios from "axios";
import Button from "../components/FormComponents/Button"
import { OpenStreetMapProvider } from 'leaflet-geosearch';
L.Icon.Default.imagePath = '../../src/app/assets/img/';

const provider = new OpenStreetMapProvider();

const RideInfosView = () => {
    const { id } = useParams();

    const [latDepart, setlatDepart] = useState(0);
    const [lngDepart, setlngDepart] = useState(0);
    const [latArrivee, setlatArrivee] = useState(0);
    const [lngArrivee, setlngArrivee] = useState(0);

    const [trajet, setTrajet] = useState({})
    const [car, setCar] = useState({})
    const [user, setUser] = useState({})
    const [images, setImages] = useState([]);
    const [comments, setComments] = useState([]);
    const [userComments, setUserComments] = useState([]);

    useEffect(() => {
        async function fetchTrajet() {
            await axios
                .get("http://localhost:8000/api/trajets/" + id)
                .then((resTrajet) => {
                    setTrajet(resTrajet.data);

                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchTrajet();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (trajet) {
                    console.log(trajet);
                    const resultsDepart = await provider.search({ query: trajet.depart });
                    const resultsArrivee = await provider.search({ query: trajet.destination });
                    const resultsCar = await axios.get('http://localhost:8000' + trajet.idCar);
                    const resultsComments = await axios.get('http://localhost:8000/get/comments/' + trajet.id);
                    const resultsUser = await axios.get('http://localhost:8000' + trajet.idAccount);
                    setlatDepart(resultsDepart[0].y);
                    setlngDepart(resultsDepart[0].x);
                    setlatArrivee(resultsArrivee[0].y);
                    setlngArrivee(resultsArrivee[0].x);
                    setCar(resultsCar.data);
                    setUser(resultsUser.data);
                    const photosUrlArray = resultsCar.data.photosUrl.split(',');
                    setImages(photosUrlArray);
                    const separateComments = []
                    const separateCommentsUsers = []
                    for (let i = 0; i < resultsComments.data.length; i = i + 2) {
                        separateComments.push(resultsComments.data[i])
                    }
                    for (let j = 1; j < resultsComments.data.length; j = j + 2) {
                        separateCommentsUsers.push(resultsComments.data[j])
                    }
                    setComments(separateComments)
                    setUserComments(separateCommentsUsers)
                }
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, [trajet]);

    return (
        <div>
            {trajet != 0 && car != 0 && images != 0 && user != 0 ? (
                <div className="bg-Teal">
                    <div className="pl-6 h-12 w-full flex-auto pt-6 mb-6">
                        <h4 className='text-Whitesmoke pt-2 h-auto flex items-center text-left'>
                            <img className="mr-5 w-16 h-auto" src="/src/app/assets/img/avatar.png" alt="id" />
                            <b>{user.prenom} {user.nom} propose le trajet de {trajet.depart} jusqu'à {trajet.destination}</b>
                            <button className="bg-[#7cc474] hover:bg-[#54b44b] text-white font-extrabold py-4 px-32 cursor-pointer rounded ml-auto mr-6">Réserver ce trajet</button>
                        </h4>
                    </div>
                    <div className={"h-[90vh] bg-Teal flex pt-6"}>

                        <div className="m-4 w-1/2 rounded-lg bg-Keppel p-6 shadow-lg shadow-teal-900 block">
                            {latDepart != 0 && lngDepart != 0 && latArrivee != 0 && lngArrivee != 0 ? (
                                <MapContainer center={[latDepart, lngDepart]} zoom={5}>
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <MapRouting latDepart={latDepart} lngDepart={lngDepart} latArrivee={latArrivee} lngArrivee={lngArrivee} />
                                </MapContainer>
                            ) : (
                                <h3 className='mb-6 mt-0.5 text-center w-full text-Whitesmoke'>Chargement...</h3>
                            )}
                        </div>

                        <div className="m-4 w-1/2 rounded-lg bg-Keppel p-6 shadow-lg shadow-teal-900 flex-auto flex flex-wrap text-Whitesmoke">
                            <h2 className='mb-6 mt-0.5 text-center w-full'>Informations</h2>
                            <p className="w-full text-2xl ml-8"><b>Date de départ: </b>{trajet.departDate}</p>
                            <p className="w-full text-2xl ml-8"><b>Heure de Départ: </b>{trajet.departHour}</p>
                            <p className="w-full text-2xl ml-8"><b>Nombre de place disponible: </b>{trajet.places}</p>
                            <p className="w-full text-2xl ml-8"><b>Nombre de petit bagages par personne: </b>{trajet.bagagesPetits}</p>
                            <p className="w-full text-2xl ml-8"><b>Nombre de gros bagages par personne: </b>{trajet.bagagesGrands}</p>
                            <p className="w-full text-2xl ml-8"><b>Le conducteur souhaite le silence: </b>{user.silence ? 'oui' : 'non'}</p>
                            <p className="w-full text-2xl ml-8"><b>Type de Musique: </b>Rap</p>
                            <p className="w-full text-2xl ml-8"><b>Marque de Voiture: </b>{car.brand}&nbsp;{car.model}</p>
                            <p className="w-full text-2xl ml-8"><b>Photos du véhicule: </b></p>
                            <div className="w-full flex flex-row overflow-x-scroll whitespace-nowrap scrollbar scrollbar-thumb-Mantis scrollbar-track-white scrollbar-rounded-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                {images.map((img) => (
                                    <div className="imgContainer ml-5">
                                        <img className="photo w-44 max-w-none max-h-[100px] object-contain inline-block" src={img} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="h-12 w-full flex-auto pt-6 mb-6">
                        <h3 className='text-Whitesmoke p-2 h-auto text-center font-extrabold'>
                            Avis
                        </h3>
                    </div>
                    <div className={"h-auto w-1/2 bg-Teal py-6 pl-20 text-Whitesmoke flex-wrap"}>
                        {comments != 0 && userComments != 0 ? (
                            comments.map((comment, index) => (
                                <div className="w-full flex mb-12">
                                    <img className="mr-5 w-16 h-16 order-1" src="/src/app/assets/img/avatar.png" alt="id" />
                                    <div className="order-2 flex flex-wrap h-[150px]">
                                        <span className="order-1 w-full lg:font-extrabold lg:text-3xl">{comment.isAnonymized ? 'User anonyme' : userComments[index].prenom}</span>
                                        {(() => {
                                            const arrUp = [];
                                            for (let i = 0; i < comment.rating; i++) {
                                                arrUp.push(
                                                    <img src="/src/app/assets/img/mdi_leaf-circle.png" className="w-[30px] h-[30px] order-2" />
                                                );
                                            }
                                            return arrUp;
                                        })()}

                                        {(() => {
                                            const arrDown = [];
                                            if ((5 - comment.rating) > 0) {
                                                for (let i = 0; i < (5 - comment.rating); i++) {
                                                    arrDown.push(
                                                        <img src="/src/app/assets/img/mdi_leaf-circle_white.png" className="w-[30px] h-[30px] order-2" />
                                                    );
                                                }
                                                return arrDown;
                                            }
                                        })()}
                                        <span className='pt-2 flex text-left w-full order-3 h-[150px] lg:text-xl'>
                                            {comment.text}
                                        </span>
                                    </div>


                                </div>
                            ))
                        ) : (
                            <div className={"h-[90vh] bg-Teal flex pt-6"}>
                                <h3 className='mb-6 mt-0.5 text-center w-full text-Whitesmoke'>Chargement...</h3>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className={"h-[90vh] bg-Teal flex pt-6"}>
                    <h3 className='mb-6 mt-0.5 text-center w-full text-Whitesmoke'>Chargement...</h3>
                </div>
            )}
        </div>
    );
};

export default RideInfosView