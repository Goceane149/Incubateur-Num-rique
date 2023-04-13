import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div
      className="containerCard flex flex-col justify-center h-[84vh]
  bg-Keppel items-center "
    >
      <div className="titleDashboard  text-white  text-4xl">
        <h1>Tableau de bord utilisateur</h1>
      </div>
      <div className="cardInfos flex bg-Teal ml-38 w-auto h-auto text-center items-center rounded-lg ">
        <div>
          <img
            className="imgProfil ml-20 h-80 w-80 rounded-full"
            src="src/app/assets/img/avatarnotexist.jpg"
            alt=""
          />
        </div>

        <div className="renseig bg-Keppel mt-20 ml-40 rounded-xl mb-20">
          <div>
            <p className="name text-white text-3xl mp-8 pb-10 font-semibold">
              Harold GERARE
              <br />
            </p>
            <p className="name text-white text-3xl mp-8 pb-10 font-semibold">
              Paris
            </p>
            <br />
            <p className=" text-white mb-8 text-3xl font-semibold">
              Token : 100
            </p>
            <div className="mt-10 mb-8">
              <button className="acheter bg-Mantis px-6 py-4 text-xl text-white drop-shadow-2xl rounded-lg my-auto mx-0">
                Acheter des tokens
              </button>
            </div>
            <div>
              <p>Evaluation Public</p>
              <div className="flex ml-6">
                <img
                  src="src/app/assets/img/mdi_leaf-circle.png"
                  alt="My Rating And Review - 4 Star Rate Png @clipartmax.com"
                ></img>
                <img
                  src="src/app/assets/img/mdi_leaf-circle.png"
                  alt="My Rating And Review - 4 Star Rate Png @clipartmax.com"
                ></img>
                <img
                  src="src/app/assets/img/mdi_leaf-circle.png"
                  alt="My Rating And Review - 4 Star Rate Png @clipartmax.com"
                ></img>
                <img
                  src="src/app/assets/img/mdi_leaf-circle.png"
                  alt="My Rating And Review - 4 Star Rate Png @clipartmax.com"
                ></img>
                <img
                  src="src/app/assets/img/mdi_leaf-circle.png"
                  alt="My Rating And Review - 4 Star Rate Png @clipartmax.com"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="containerCardInfo flex bg-Keppel mr-20 ml-20 mt-20 ml-20 rounded-xl mb-20">
          <div className="histor text-justify">
            <h3 className="text-white text-4xl  font-semibold mb-8">
              Historique des trajets
            </h3>

            <p className="text-white text-lg mb-8">
              .le 12/10/2020 Beauvais
              <FontAwesomeIcon
                className="FontAwesomeIcon1 ml-8 mr-8"
                w-24
                icon={faArrowRight}
              />
              Paris
            </p>
            <p className="text-white text-lg mb-8">
              .le 12/10/2020 Beauvais
              <FontAwesomeIcon
                className="FontAwesomeIcon1 ml-8 mr-8"
                w-24
                icon={faArrowRight}
              />{" "}
              Amiens
            </p>
            <p className="text-white text-lg mb-8">
              .le 12/10/2020 Beauvais
              <FontAwesomeIcon
                className="FontAwesomeIcon1 ml-8 mr-8"
                w-24
                icon={faArrowRight}
              />
              Lourdes
            </p>

            <div className="pb-10">
              <button className="acheter bg-Mantis ml-20  px-6 py-4 text-xl text-white drop-shadow-2xl rounded-lg my-auto mx-0">
                En voir plus<a href="../../../../../../Downloads"></a>
              </button>
            </div>
            <div>
              <a
                className="acheter bg-Mantis ml-16 px-6 py-4 text-xl text-white drop-shadow-2xl rounded-lg my-auto mx-0"
                href="./ModificationView"
              >
                Modifier le profil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
