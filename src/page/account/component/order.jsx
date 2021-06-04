export default function Order(){
    return(
        <div className="card card-lg mb-5 border">
        <div className="card-body pb-0">
          {/* Info */}
          <div className="card card-sm">
            <div className="card-body bg-light">
              <div className="row">
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Order No:</h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    673290789
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    <time dateTime="2019-10-01">
                      01 Oct, 2019
                    </time>
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Status:</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    Awating Delivery
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    $259.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          {/* Heading */}
          <h6 className="mb-7">Order Items (3)</h6>
          {/* Divider */}
          <hr className="my-5" />
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-4 col-md-3 col-xl-2">
                  {/* Image */}
                  <a href="product.html"><img src="/img/products/product-6.jpg" alt="..." className="img-fluid" /></a>
                </div>
                <div className="col">
                  {/* Title */}
                  <p className="mb-4 font-size-sm font-weight-bold">
                    <a className="text-body" href="product.html">Cotton floral print Dress x 1</a> <br />
                    <span className="text-muted">$40.00</span>
                  </p>
                  {/* Text */}
                  <div className="font-size-sm text-muted">
                    Size: M <br />
                    Color: Red
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-4 col-md-3 col-xl-2">
                  {/* Image */}
                  <a href="product.html"><img src="/img/products/product-10.jpg" alt="..." className="img-fluid" /></a>
                </div>
                <div className="col">
                  {/* Title */}
                  <p className="mb-4 font-size-sm font-weight-bold">
                    <a className="text-body" href="product.html">Suede cross body Bag x 1</a> <br />
                    <span className="text-muted">$49.00</span>
                  </p>
                  {/* Text */}
                  <div className="font-size-sm text-muted">
                    Color: Brown
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row align-items-center">
                <div className="col-4 col-md-3 col-xl-2">
                  {/* Image */}
                  <a href="product.html"><img src="/img/products/product-48.jpg" alt="..." className="img-fluid" /></a>
                </div>
                <div className="col">
                  {/* Title */}
                  <p className="mb-4 font-size-sm font-weight-bold">
                    <a className="text-body" href="product.html">Sweatshirt with Pocket</a> <br />
                    <span className="text-muted">$39.00</span>
                  </p>
                  {/* Text */}
                  <div className="font-size-sm text-muted">
                    Size: L <br />
                    Color: Pink
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
}