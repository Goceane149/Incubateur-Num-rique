import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RideResultCard from '../components/RideResultCard';

const ResultRideSearch = () => {
  const [params, setParams] = useState({});
  const [result, setResult] = useState([]);
  const [ride, setRide] = useState([]);

  let getParamFromUrl = () => {
    let url = window.location.href;
    setParams({
      depart: url.split('/')[5],
      destination: url.split('/')[6],
      date: url.split('/')[7],
      hour: url.split('/')[8],
    });
  };

  useEffect(() => {
    getParamFromUrl();
    axios
      .get('https://127.0.0.1:8000/api/trajets')
      .then((res) => setRide(res.data['hydra:member']));
  }, []);

  useEffect(() => {
    resultFilter();
  }, [ride]);

  let resultFilter = () => {
    let result = ride.filter(function (ride) {
      if (
        ride.depart === params.depart &&
        ride.destination === params.destination &&
        ride.depart_date === params.date
      ) {
        return true;
      } else return false;
    });
    setResult(result);
  };

  let ridesDisplayer = () => {
    if (result.length > 0) {
      return result.map((ride) => (
        <RideResultCard
          depart={ride.depart}
          destination={ride.destination}
          conducteur={ride.conducteur}
          departHour={ride.departHour}
          destinationHour={ride.destinationHour}
          date={ride.depart_date}
        />
      ));
    } else
      return 'Nous sommes désolés, aucun trajet ne correspond à vos critères';
  };

  return (
    <div className="min-h-[84vh] text-center py-12 bg-blueBg">
      <h1 className="mb-12 text-white">Résultat(s) de votre recherche</h1>
      <ul className="w-1/2 h-5/6 bg-blueBg m-auto border-t-2 border-t-white">
        {ridesDisplayer()}
      </ul>
    </div>
  );
};

export default ResultRideSearch;
