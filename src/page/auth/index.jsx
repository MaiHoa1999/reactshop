import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from "./component/Login";
import Register from "./component/Register";

export default function Auth() {
  let { login } = useSelector((store) => store.auth);

  if (login) {
    return <Redirect to="/account" />;
  }

  return (
    <>
      {/* CONTENT */}
      <section className="py-12">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              {/* Card */}
              <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="mb-7">Returning Customer</h6>
                  <Login />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Card */}
              <div className="card card-lg">
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="mb-7">New Customer</h6>
                  {/* Form */}
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
