import React from 'react';
import { Route, Routes as RoutesContainer } from 'react-router-dom';

import { ROLE_ADMIN } from '../constants/rolesConstant';
import * as URL from '../constants/urls/urlFrontEnd';
import AdminHomeView from '../views/AdminHomeView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RidePostView from '../views/RidePostView';
import RideSearch from '../views/RideSearchView';
import { PrivateRoute } from './PrivateRoute';
import ModificationView from '../views/ModificationView';
import AproposView from '../views/AproposView';
import InscriptionView from '../views/InscriptionView';
import ContactView from "../views/ContactView";
import AdminAlert from '../views/AdminAlert';
import AdminUserView from '../views/AdminUserView';
import ResultRideSearch from '../views/ResultRideSearch';
import RideInfosView from '../views/RideInfosView'
import Dashboard from '../views/Dashboard'
import AutreProfilView from '../views/AutreProfilView'
import VoirprofilView from '../views/VoirprofilView'
import Adminmodification from "../views/AdminmodificationView";


/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <RoutesContainer>
        <Route index element={<HomeView />} />
        <Route
        path="Admin"
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />
      <Route path="Modifier-profil" element={<ModificationView />} />
      <Route path="a-propos" element={<AproposView />} />
      <Route path="Inscription" element={<InscriptionView />} />
      <Route path={'/ride/post'} element={<RidePostView />} />
      <Route path={'/ride/search'} element={<RideSearch />} />
      <Route path={'/Login'} element={<LoginView />} />
      <Route path={'/Contact'} element={<ContactView />} />
      <Route path={'/Admin/alert'} element={<AdminAlert />} />
      <Route path={'/Admin/user'} element={<AdminUserView />} />
      <Route path={'/search/results/:depart/:destination/:date/:hour'} element={<ResultRideSearch />} />
        <Route path="AutreProfilView" element={<AutreProfilView />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="profils" element={<VoirprofilView />}/>
      <Route path={'/ride/infos/:id'} element={<RideInfosView />} />
        <Route path={'/Admin/ModificationAdmin'} element={<Adminmodification />} />

    </RoutesContainer>
  );
};

export default Routes;
