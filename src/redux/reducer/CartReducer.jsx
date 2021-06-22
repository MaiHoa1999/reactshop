import { ADDCART,DECREASE, REMOVE,ADDITION } from "../type";


const initialSate = {
  list:JSON.parse(localStorage.getItem("cart")) || [] ,
  num: JSON.parse(localStorage.getItem("num")) || 0,
  amount: JSON.parse(localStorage.getItem("amount")) || 0,
};
export default function cartReducer(state = initialSate, action){
    switch (action.type) {
        case ADDCART:
          let {list,num, amount} = state
          let item =action.payload;
          // list.push(item)
          // =-1 tuc la ko co sp giong no
          //!=-1 laf da co sp giong
          let cartNum = action.payload.cartNum || 1;
          let index = list.findIndex((e) => e._id === action.payload._id);
          num += 1;
          if(index === -1){
            item.cartNum = cartNum;
            list.push(item)
            amount += item.real_price;
          }else{
            list[index].cartNum += cartNum;
            amount += list[index].real_price;
          }
      localStorage.setItem('cart',JSON.stringify(list))
      localStorage.setItem('num',JSON.stringify(num))
      localStorage.setItem('amount',JSON.stringify(amount))
          return{
            ...state,
            list,
            num,
            amount
          }

          case DECREASE:{
            let {list,num,amount} = state
            let index = list.findIndex((e) => e._id === action.payload._id);
            // let item =action.payload;
            num-=1
            amount -= action.payload.real_price;
            list[index].cartNum -=1
            if(list[index].cartNum === 0){
              list.splice(index,1)
            }
            return{
              ...state,
              list,
              num,
              amount
            }
          }
          case ADDITION:{
          // console.log('add')
            let {list,num,amount} = state
            let index = list.findIndex((e) => e._id === action.payload._id);
            num += 1;
            list[index].cartNum += 1;
            amount += action.payload.real_price;
            
            return{
              ...state,
              list,
              num,
              amount
            }
          }
          case REMOVE:{
            let {list,num,amount} =state
            let index = list.findIndex((e)=>e._id === action.payload)
            let newList =list.filter((e)=>e._id !== action.payload)
            let temp = list[index].cartNum 
            amount -= list[index].cartNum * list[index].real_price
            // console.log(list[index].cartNum)
            return{
              ...state,
              list: newList,
              num: num - temp  ,
              amount
            }
          }

        

        default:
            return state;

    }
}