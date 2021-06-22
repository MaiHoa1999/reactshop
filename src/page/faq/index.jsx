import { useEffect, useState } from "react";
import FaqApi from "../../sevice/Faq";
import FaqList from "./component/FaqList";

export default function Faq() {
  const [list, setList] = useState();
  useEffect(async () => {
    let res = await FaqApi.getFaq();
    setList(res);
    
  }, []);
  return (
    <>
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              {/* Heading */}
              <h3 className="mb-10 text-center">Frequently Asked Questionss</h3>
              
              {
                list?.map((e,i)=> <FaqList key={i} {...e}/>)
              }
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
