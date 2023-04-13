import { Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import { signIn } from '../redux-store/authenticationSlice';
import { authenticate } from '../api/backend/account';
import axios from 'axios';
import { getPayloadToken } from '../services/tokenServices';
import { setUser } from '../redux-store/userSlice';
import Button from "../components/FormComponents/Button";
import Input from "../components/FormComponents/Input";
import InputT from '../components/InputT';
/**
 * View/Page Login
 *
 * @author Peter Mollet
 */
const LoginView = () => {
  const [errorLog, setErrorLog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    authenticate(values)
      .then((res) => {
        if (res.status === 200 && res.data) {
          dispatch(signIn(res.data.token));
          const claims = getPayloadToken(res.data.token);
          let splitAt = claims.username.split('@');
          let name = splitAt[0];
          let domain = splitAt[1].split('.')[0];
          let ext = splitAt[1].split('.')[1];
          axios
            .get(
              `https://127.0.0.1:8000/get/user_by_email/${name}/${domain}/${ext}`
            )
            .then((res) => {
              dispatch(setUser(res.data[0]))
              if(claims.roles.some((role) => role === 'ROLE_ADMIN')){
                navigate('/Admin');
              } else {
                navigate('/');
              };
            });
        }
      })
      .catch(() => setErrorLog(true));
  };

  return (
      <div className="container1 flex bg-Teal">
        <div className="container2 w-2/3 flex justify-center items-center">
          <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={(values) => handleLogin(values)}
          >
            <div className="h-[84vh] flex flex-col text-center w-full rounded-lg bg-Teal p-6">
              <h1 className="text-Whitesmoke text-center font-bold mt-12 mb-8">
                Connexion
              </h1>
              <Form className="mt-2 mb-2 w-full max-w-full">
                <div className="test flex flex-col justify-center items-center mr-32">
                  <Input
                      label="Email :"
                      name="username"
                      type="email"
                      width=""
                  />
                  <Input
                      label="Mot de passe :"
                      name="password"
                      type="text"
                      width=""
                  />
                </div>

                <div className="btn-inscription mt-4">
                  <Button children="Connexion"/>
                  <div className="flex items-center justify-center">
                    <NavLink to="/forgot-password">
                      <span className="cursor-pointer text-Whitesmoke font-bold text-sm">
                        Vous avez oublié votre mot de passe ?
                      </span>
                    </NavLink>
                  </div>
                  <hr className="w-2/3 mt-4 m-autoX" />
                </div>
                <p className="cursor-pointer mt-4 mb-2 text-Whitesmoke">
                  Vous n'avez pas encore de compte ?
                </p>
                <div className="btn-connexion">
                  <NavLink to={'/Inscription'}>
                    <Button children="Inscription"/>
                  </NavLink>
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
  );
};

export default LoginView;
