import Api from "../core/classApi";
import { endpoint } from "./Config";

const FaqApi = {
  getFaq (){
    // return Api.get(`${endpoint}faq`)
    return fetch(`/faq.json`).then(res => res.json())
  }


};
export default FaqApi;
