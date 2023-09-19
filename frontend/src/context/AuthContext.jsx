import { createContext, useEffect, useReducer } from 'react';

const initial_state = {
  user:
    localStorage.getItem('user') != undefined
      ? JSON.parse(localStorage.getItem('user'))
      : null,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        error: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        user: null,
        error: null,
      };
    case 'LOGOUT':
      return {
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
