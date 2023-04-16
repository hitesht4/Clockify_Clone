import { error, loading, login, logout, register } from "./Auth.types";

const user = JSON.parse(localStorage.getItem("User"));

const initialstate = {
  user: user || {},
  isError: false,
  isLoading: false,
  message: "",
};

export const AuthReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case loading: {
      return { ...state, isLoading: true };
    }
    case error: {
      return { ...state, isLoading: false, isError: true };
    }
    case register: {
      localStorage.setItem("User", JSON.stringify(payload));
      return {
        ...state,
        isLoading: false,
        user: { ...payload },
        isError: false,
      };
    }
    case login: {
      localStorage.setItem("User", JSON.stringify(payload));
      return {
        ...state,
        isLoading: false,
        user: { ...payload },
        isError: false,
      };
    }
    case logout: {
      localStorage.removeItem("User");
      return { ...state, isLoading: false, user: {}, isError: false };
    }
    default: {
      return state;
    }
  }
};
