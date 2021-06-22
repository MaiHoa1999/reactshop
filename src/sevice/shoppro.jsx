import Api from "../core/classApi";
import { endpoint } from "./Config";

const ShopApi = {
  getProduct (str){
    return Api.get(`product?${str}`)
  }
,
getCategory(){
  return Api.get(`categories`)
}
,
productDetail(slug){
  return (fetch(`${endpoint}product?slug=${slug}`).then(res => res.json()))
}
};
export default ShopApi;
