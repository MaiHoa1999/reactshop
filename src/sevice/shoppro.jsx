import { endpoint } from "./config";


const ShopApi = {
  getproduct() {
    return fetch(`http://cfd-reactjs.herokuapp.com/product`).then(
      (res) => res.json()
    );
  },
  getcategory() {
    return fetch(`http://cfd-reactjs.herokuapp.com/categories`).then(
      (res) => res.json()
    );
  }
//   relatedProduct(slug) {
//     return fetch(
//       `http://cfd-reactjs.herokuapp.com/elearning/v4/course-related/${slug}`
//     ).then((res) => res.json());
//   },
 

};
export default ShopApi;
