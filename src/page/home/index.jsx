import Banner from './component/Banner'
import Features from './component/Features'
import BestPicks from './component/BestPicks'
import TopSeller from './component/TopSells'
import CountDown from './component/Countdown'
import Review from './component/Review'
import Brand from './component/Brand'
import Promo from '../../component/Promo'

export default function Home(){
    return(
        <>
        {/* Newsletter: Horizontal */}
       
        {/* PROMO */}
      <Promo/>
        {/* CATEGORIES */}
       <Banner/>
        {/* FEATURES */}
        <Features/>
        {/* BEST PICKS */}
       <BestPicks/>
        {/* TOP SELLERS */}
       <TopSeller/>
        {/* COUNTDOWN */}
       <CountDown/>
        {/* REVIEWS */}
        <Review/>
        {/* BRANDS */}
        <Brand/>
      </>
    )
}