
import { LOGIN, LOGOUT, ERROR, UPDATE,REGISTER} from "./../type";

let initState = {
  loginError: "",

  login: JSON.parse(localStorage.getItem("login")),
};
export default function authReducer(state = initState, action) {
  if (action.type === LOGIN) {
    localStorage.setItem("login", JSON.stringify(action.payload));
    return {
      ...state,
      login: action.payload,
    };
  }
  if (action.type === LOGOUT) {
    localStorage.setItem("login", false);
    return {
      ...state,
      login: false,
    };
  }
  if (action.type === ERROR) {
    return {
      ...state,
      loginError: action.payload,
    };
  }
  if (action.type === UPDATE) {
    localStorage.setItem("login", JSON.stringify(action.payload));
    return {
      ...state,
      login: action.payload,
    };
  }
  if (action.type ===REGISTER){
    localStorage.setItem("data", JSON.stringify(action.payload));
    return {
      ...state,
      data: action.payload,
      // login: true,
    };}
 
  return state;
}
