import { ADDCART,DECREASE,REMOVE, ADDITION } from "../type";

export function addCart(cart) {
    return {
      type: ADDCART,
      payload: cart,
    };
  }
export function actionDecrease(id){
  return{
    type: DECREASE,
    payload: id
  }
}
export function actionAdd(id){
  return{
    type: ADDITION,
    payload: id
  }
}
export function actionRemove(id){
  return{
    type: REMOVE,
    payload: id
  }
}

