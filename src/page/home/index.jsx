import Banner from './component/banner'
import Features from './component/features'
import BestPicks from './component/bestPicks'
import TopSeller from './component/topSells'
import CountDown from './component/countdown'
import Review from './component/review'
import Brand from './component/brand'

export default function Home(){
    return(
        <>
        {/* Newsletter: Horizontal */}
       
        {/* PROMO */}
        <div className="py-3 bg-dark bg-pattern mb-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Text */}
                <div className="text-center text-white">
                  <span className="heading-xxs letter-spacing-xl">
                    ⚡️ Happy Holiday Deals on Everything ⚡️
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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