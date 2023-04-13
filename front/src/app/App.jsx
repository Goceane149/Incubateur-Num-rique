import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/layouts/Navbar';
import { selectIsLogged, signIn } from './redux-store/authenticationSlice';
import { setUser } from './redux-store/userSlice';
import Routes from './routes/Routes';
import { getToken, getPayloadToken, getUserService } from './services/tokenServices';
import axios from 'axios';
import Footer from './components/layouts/Footer';
import axios from 'axios';
import { getPayloadToken } from './services/tokenServices';
import { setUser } from './redux-store/userSlice';

const contextClass = {
  success: 'bg-green-600',
  error: 'bg-red-600',
  info: 'bg-blue-600',
  warning: 'bg-yellow-500',
  default: 'bg-indigo-600',
  dark: 'bg-white-600 font-gray-300',
};

function IdleTimerCustom() {
  return null;
}

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */
const App = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const user = getUserService();
    if (user) dispatch(setUser(user));
    const token = getToken();
    if (token) {
      dispatch(signIn(token))
      const claims = getPayloadToken(token);
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
            });
    };
    setIsLogin(false);
  }, []);

  if (isLogin) return null;

  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      <div className="flex h-full cursor-default relative flex-col bg-gray-100">
        {isLogged && <IdleTimerCustom />}
        <Navbar />
        <main>
          <Routes />
        </main>
        <ToastContainer
          toastClassName={({ type }) =>
            contextClass[type || 'default'] +
            ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
          }
          bodyClassName={() => 'text-sm font-white font-med block p-3'}
          position="bottom-left"
          autoClose={3000}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
