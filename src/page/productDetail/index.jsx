import Features from "../../component/BoxFeature"
import { Description, ProDetail, RelatePro, Review } from "./component"
import { useParams } from "react-router";
import {useState,useEffect} from 'react'
import ShopApi from "../../sevice/Shoppro";

export default function ProductDetail(){
    let {slug} = useParams()
  console.log(`slug`, slug)
  let [state, setState] =useState()
  
    
      useEffect(async() => {
        let res = await ShopApi.productDetail(slug);
      
        console.log(`res`, res)
  
       setState(res)
       
        
    }, [slug])

    console.log(state)
    return(
        <div>
        <ProDetail {...state?.data[0]}/>
        {/* DESCRIPTION */}
        <Description/>
        {/* PRODUCTS */}
        <RelatePro/>

        {/* REVIEWS */}
        <Review/>
        
        {/* FEATURES */}
       <Features/>
      </div>
    )
}