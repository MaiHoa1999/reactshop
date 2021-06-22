import { useSelector, useDispatch } from "react-redux";
import useFormValidate from "../../../core/UseForm";
import Auth from "../../../sevice/Auth";
import { updateAction } from "../../../redux/action/AuthAction";
import { useState } from "react";
export default function PersonalInfo() {
  let { loginError, setLoginError } = useState(null);

  const { login } = useSelector((store) => store.auth);
  let { error, inputChange, check, form } = useFormValidate(
    {
      first_name: "",
      last_name: "",
      new_password: "",
      current_password: "",
    },
    {
      rule: {
        first_name: {
          required: true,
        },
        last_name: {
          required: true,
        },
        new_password: {
          required: true,
          min: 6,
          max: 32,
        },
        current_password: {
          required: true,
          min: 6,
          max: 32,
        },
      },
      message: {
        phone: {
          pattern: " phone không đúng định dạng",
        },
      },
    }
  );
  let dispatch = useDispatch();

  async function updateForm(e) {
    e.preventDefault();
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      let res = await Auth.update(form);
      if (res.data) {
        dispatch(updateAction(res.data));
      }
    }
  }
  return (
    <>
      {loginError && <p className="txt-error">{loginError}</p>}
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountFirstName">First Name *</label>
              <input
                className="form-control form-control-sm"
                id="accountFirstName"
                value={form.first_name}
                name="first_name"
                onChange={inputChange}
                type="text"
                placeholder="First Name *"
                defaultValue="Daniel"
              />
              {error.first_name && <p className="text-error">{error.first_name}</p>}
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountLastName">Last Name *</label>
              <input
                className="form-control form-control-sm"
                id="accountLastName"
                value={form.last_name}
                name="last_name"
                onChange={inputChange}
                type="text"
                placeholder="Last Name *"
                defaultValue="Robinson"
               
              />
              {error.last_name && <p className="text-error">{error.last_name}</p>}
            </div>
          </div>
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label htmlFor="accountEmail">Email Address *</label>
              <input
                className="form-control form-control-sm"
                id="accountEmail"
                value={login.email}
                disabled
                type="email"
                placeholder="Email Address *"
                defaultValue="user@email.com"
              
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label htmlFor="accountPassword">Current Password *</label>
              <input
                className="form-control form-control-sm"
                id="accountPassword"
                value={form.current_password}
                name="current_password"
                onChange={inputChange}
                type="password"
                placeholder="Current Password *"
             
              />
              {error.current_password && <p className="text-error">{error.current_password}</p>}
            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label htmlFor="AccountNewPassword">New Password *</label>
              <input
                className="form-control form-control-sm"
                id="AccountNewPassword"
                value={form.new_password}
                name="new_password"
                onChange={inputChange}
                type="password"
                placeholder="New Password *"
                
              />
              {error.new_password && <p className="text-error">{error.new_password}</p>}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Birthday */}
            <div className="form-group">
              {/* Label */}
              <label>Date of Birth</label>
              {/* Inputs */}
              <div className="form-row">
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountDate">
                    Date
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountDate"
                  >
                    <option>10</option>
                    <option>11</option>
                    <option selected>12</option>
                  </select>
                </div>
                <div className="col">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountMonth">
                    Month
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountMonth"
                  >
                    <option>January</option>
                    <option selected>February</option>
                    <option>March</option>
                  </select>
                </div>
                <div className="col-auto">
                  {/* Date */}
                  <label className="sr-only" htmlFor="accountYear">
                    Year
                  </label>
                  <select
                    className="custom-select custom-select-sm"
                    id="accountYear"
                  >
                    <option>1990</option>
                    <option selected>1991</option>
                    <option>1992</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            {/* Gender */}
            <div className="form-group mb-8">
              <label>Gender</label>
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-sm btn-outline-border active">
                  <input type="radio" name="gender" defaultChecked /> Male
                </label>
                <label className="btn btn-sm btn-outline-border">
                  <input type="radio" name="gender" /> Female
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* Button */}
            <button className="btn btn-dark" type="submit" onClick={updateForm}>
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
