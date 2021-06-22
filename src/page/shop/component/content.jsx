import { useEffect, useState, useRef } from "react";
import Pagination from "../../../component/Pagination";
import ProductItem from "../../../component/ProductItem";
import ShopApi from "../../../sevice/Shoppro";
import Breadcrumb from "../../../component/BreadCrumb";
import {convertQueryToObject} from '../../../utils/QueryUrl'
let $ = window.$;

const reverse = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export function Content({ category }) {
  let obj = convertQueryToObject();
  let str = reverse(obj);
  let ref = useRef();
  let [state, setState] = useState({
    data: [],
    paginate: [],
  });

  useEffect(() => {
    $(ref.current).flickity({
      pageDots: true,
    });
  }, []);

  useEffect(async () => {
    let res = await ShopApi.getProduct(str);
    setState({
      data: res.data,
      paginate: res.paginate,
    });
  }, [str]);

  let categoryItem = category.find((e) => e.id == obj.categories);
  return (
    <>
      <div ref={ref} className="flickity-page-dots-inner mb-9">
        {/* Item */}
        <div className="w-100">
          <div
            className="card bg-h-100 bg-left"
            style={{ backgroundImage: "url(/img/covers/cover-24.jpg)" }}
          >
            <div className="row" style={{ minHeight: "400px" }}>
              <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                <div className="card-body px-md-10 py-11">
                  {/* Heading */}
                  <h4>2019 Summer Collection</h4>
                  {/* Button */}
                  <a className="btn btn-link px-0 text-body" href="shop.html">
                    View Collection <i className="fe fe-arrow-right ml-2" />
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                style={{ backgroundImage: "url(/img/covers/cover-16.jpg)" }}
              />
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="w-100">
          <div
            className="card bg-cover"
            style={{ backgroundImage: "url(/img/covers/cover-29.jpg)" }}
          >
            <div
              className="row align-items-center"
              style={{ minHeight: "400px" }}
            >
              <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                <div className="card-body px-md-10 py-11">
                  {/* Heading */}
                  <h4 className="mb-5">Get -50% from Summer Collection</h4>
                  {/* Text */}
                  <p className="mb-7">
                    Appear, dry there darkness they're seas. <br />
                    <strong className="text-primary">Use code 4GF5SD</strong>
                  </p>
                  {/* Button */}
                  <a className="btn btn-outline-dark" href="shop.html">
                    Shop Now <i className="fe fe-arrow-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="w-100">
          <div
            className="card bg-cover"
            style={{ backgroundImage: "url(/img/covers/cover-30.jpg)" }}
          >
            <div
              className="row align-items-center"
              style={{ minHeight: "400px" }}
            >
              <div className="col-12">
                <div className="card-body px-md-10 py-11 text-center text-white">
                  {/* Preheading */}
                  <p className="text-uppercase">Enjoy an extra</p>
                  {/* Heading */}
                  <h1 className="display-4 text-uppercase">50% off</h1>
                  {/* Link */}
                  <a className="link-underline text-reset" href="shop.html">
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="row align-items-center mb-7">
        <div className="col-12 col-md">
          {/* Heading */}
          {categoryItem ? (
            <h3 className="mb-1">{categoryItem?.title}</h3>
          ) : (
            <h3 className="mb-1">All Products</h3>
          )}{" "}
          {/* Breadcrumb */}
          <Breadcrumb
            list={[
              {
                title: "Home",
                link: "/",
              },
              {
                title: categoryItem?.title,
              },
            ]}
          />
        </div>
        <div className="col-12 col-md-auto">
          {/* Select */}
          <select className="custom-select custom-select-xs">
            <option selected>Most popular</option>
          </select>
        </div>
      </div>
      {/* Tags */}
      <div className="row mb-7">
        <div className="col-12">
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            Shift dresses{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            Summer{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            M{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            White{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            Red{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            Adidas{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            $10.00 - $49.00{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
          <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
            $50.00 - $99.00{" "}
            <a className="text-reset ml-2" href="#!" role="button">
              <i className="fe fe-x" />
            </a>
          </span>
        </div>
      </div>
      {/* Products */}
      <div className="row">
        {state?.data.map((value, i) => (
          <ProductItem key={value.slug} {...value} />
        ))}
      </div>
      <Pagination {...state.paginate} />
    </>
  );
}
