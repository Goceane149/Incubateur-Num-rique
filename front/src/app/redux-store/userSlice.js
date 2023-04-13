import { createSlice } from '@reduxjs/toolkit';
import { setUserService } from './..//services/tokenServices';

const initialState = {
  adresse: null,
  cp: null,
  dateNaissance: null,
  email: null,
  id: null,
  nom: null,
  prenom: null,
  roles: null,
  silence: null,
  tokens: null,
  ville: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.adresse = action.payload.adresse;
      state.cp = action.payload.cp;
      state.dateNaissance = action.payload.dateNaissance;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.nom = action.payload.nom;
      state.prenom = action.payload.prenom;
      state.roles = action.payload.roles;
      state.silence = action.payload.silence;
      state.tokens = action.payload.tokens;
      state.ville = action.payload.ville;
      setUserService(action.payload);
    },
    clearUser: (state) => {
      state.adresse = null;
      state.cp = null;
      state.dateNaissance = null;
      state.email = null;
      state.id = null;
      state.nom = null;
      state.prenom = null;
      state.roles = null;
      state.silence = null;
      state.tokens = null;
      state.ville = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
