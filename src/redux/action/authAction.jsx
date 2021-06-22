import Auth from "../../sevice/Auth"
import { LOGIN, LOGOUT, ERROR, UPDATE, REGISTER } from "../type";

export function loginAction(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}
export function registerAction(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}

export function errorAction(data) {
  return {
    type: ERROR,
    payload: data,
  };
}
export function updateAction(data) {
  return async (dispatch) => {
    let res = await Auth.update(data);
    if (res.data) {
      dispatch({
        type: UPDATE,
        payload: res.data,
      });
    } else if (res.error) {
      dispatch({
        type: ERROR,
        payload: res.error,
      });
    }
  };
}
