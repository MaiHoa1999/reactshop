import { Content, Sidebar } from "./component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Promo from "../../component/Promo";
import ShopApi from "../../sevice/Shoppro";
import {convertQueryToObject} from '../../utils/QueryUrl'


export default function Shop() {
  let obj = convertQueryToObject();
  console.log("  obj.categories", obj.categories);
  let [category, setCategory] = useState();
  useEffect(async () => {
    let res = await ShopApi.getCategory();
    setCategory(res);
  }, []);
  if (!category) return "load";

  return (
    <>
      {/* PROMO */}
      <Promo />
      {/* CONTENT */}
      <section className="py-11">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              {/* Filters */}
              <Sidebar category={category} />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              {/* Slider */}
              <Content category={category} />
              {/* Pagination */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
