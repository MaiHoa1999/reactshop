import Promo from "../../component/promo";
import { Content, Sidebar } from "./component";

export default function Shop() {
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
             <Sidebar/>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              {/* Slider */}
              <Content />
              {/* Pagination */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
