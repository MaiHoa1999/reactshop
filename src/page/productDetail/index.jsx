import Features from "../../component/boxFeature"
import { Description, ProDetail, RelatePro, Review } from "./component"

export default function ProductDetail(){
    return(
        <div>
        <ProDetail/>
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