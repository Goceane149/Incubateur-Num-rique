import React from 'react';

const AdminAlert = () => {
  return (
    <div className="h-[84vh] bg-[#04ADBF]">
      <h1 className="text-center mb-12 text-white">Alertes et signalements</h1>
      <div className="flex w-8/10 justify-around h-fit my-auto">
        <div className="bg-blueBg w-670 h-560 overflow-y-auto p-4 text-center rounded">
          <h4 className="mb-4 text-white">Signalements</h4>
          <div>
            <ul>
              <li className="flex justify-around items-center w-full border-2 border-white py-3 text-white mb-2">
                <p>Harold</p>
                <p>22/03/23</p>
                <p>12:12</p>
                <p>Insultes</p>
                <p>trajet:id</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                  Voir
                </button>
              </li>
              <li className="flex justify-around items-center w-full border-2 border-white py-3 text-white mb-2">
                <p>Harold</p>
                <p>22/03/23</p>
                <p>12:12</p>
                <p>Insultes</p>
                <p>trajet:id</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                  Voir
                </button>
              </li>
              <li className="flex justify-around items-center w-full border-2 border-white py-3 text-white mb-2">
                <p>Harold</p>
                <p>22/03/23</p>
                <p>12:12</p>
                <p>Insultes</p>
                <p>trajet:id</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                  Voir
                </button>
              </li>
              <li className="flex justify-around items-center w-full border-2 border-white py-3 text-white mb-2">
                <p>Harold</p>
                <p>22/03/23</p>
                <p>12:12</p>
                <p>Insultes</p>
                <p>trajet:id</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                  Voir
                </button>
              </li>
              <li className="flex justify-around items-center w-full border-2 border-white py-3 text-white mb-2">
                <p>Harold</p>
                <p>22/03/23</p>
                <p>12:12</p>
                <p>Insultes</p>
                <p>trajet:id</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                  Voir
                </button>
              </li>
              <li className="flex justify-around items-center w-full border-2 border-white py-3 text-white mb-2">
                <p>Harold</p>
                <p>22/03/23</p>
                <p>12:12</p>
                <p>Insultes</p>
                <p>trajet:id</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                  Voir
                </button>
              </li>
              <li className="flex justify-around items-center w-full border-2 border-white py-3 text-white mb-2">
                <p>Harold</p>
                <p>22/03/23</p>
                <p>12:12</p>
                <p>Insultes</p>
                <p>trajet:id</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                  Voir
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-950 bg-slate-200 h-full p-2 text-white rounded">
          <div className="bg-blueBg text-center py-4 mb-4">
            <h4 className="mb-4">Insultes pendant le trajet</h4>
            <div className="flex justify-around  px-12">
              <div className="text-center">
                <p>Signalé par</p>
                <div className="h-24 w-24 rounded-full bg-slate-500 my-3 mx-auto" />
                <p className="text-2xl font-bold">Harold</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded w-full cursor-pointer my-4">
                  Contacter
                </button>
              </div>
              <div className="arrow-alert" />
              <div className="text-center">
                <p>A propos de</p>
                <div className="h-24 w-24 rounded-full bg-slate-500 my-3 mx-auto" />
                <p className="text-2xl font-bold">Jeff</p>
                <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 block  rounded cursor-pointer my-4">
                  Contacter
                </button>
                <button className="bg-red-500 hover:bg-red-600 tracking-wider text-white font-extrabold py-2 px-4 w-full rounded block  cursor-pointer my-4">
                  Bannir
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" w-1/2 p-3 text-black border-2 border-blueBg">
              <p>
                <strong>Date :</strong> 22/02/2022
              </p>
              <p className="my-3">
                <strong>Trajet :</strong> IDTrajet{' '}
              </p>
              <p>
                <strong>Commentaire : </strong>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. In vitae elit eget magna mollis
                lacinia. Vivamus a mauris viverra, eleifend augue id, imperdiet
                augue. Aenean nec nunc non est ornare sollicitudin consequat
                quis purus. Praesent laoreet ultrices turpis, at viverra enim
                nam.
              </p>
            </div>
            <div className=" border-2 border-blueBg w-1/2 ">
              <h6 className="text-center bg-blueBg">
                Historique des signalements de Jeff
              </h6>
              <ul className="h-full max-h-48 overflow-y-auto ">
                <li className="flex justify-around items-center w-full border-y-2 border-blueBg p-2 text-black">
                  <p>
                    Jeff n'a fait l'objet d'aucun signalement pour le moment
                  </p>
                  <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                    Voir
                  </button>
                </li>
                <li className="flex justify-around items-center w-full border-y-2 border-blueBg p-2 text-black">
                  <p>
                    Jeff n'a fait l'objet d'aucun signalement pour le moment
                  </p>
                  <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                    Voir
                  </button>
                </li>
                <li className="flex justify-around items-center w-full border-y-2 border-blueBg p-2 text-black">
                  <p>
                    Jeff n'a fait l'objet d'aucun signalement pour le moment
                  </p>
                  <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                    Voir
                  </button>
                </li>
                <li className="flex justify-around items-center w-full border-y-2 border-blueBg p-2 text-black">
                  <p>
                    Jeff n'a fait l'objet d'aucun signalement pour le moment
                  </p>
                  <button className="bg-[#7cc474] hover:bg-[#54b44b] tracking-wider text-white font-extrabold py-2 px-4 rounded  cursor-pointer">
                    Voir
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAlert;
