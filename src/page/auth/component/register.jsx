import { useDispatch } from "react-redux";
import useFormValidate from '../../../core/useForm'
import {registerAction,errorAction } from "../../../redux/action/authAction";
import Auth from "../../../sevice/auth";

export default function Register(){
  let dispatch = useDispatch();

  let { error, inputChange, check, form } = useFormValidate(
    {
      email: "",
      lastname: "",
      firstname: "",
      confirmpass:"",
      password: "",
    },
    {
      rule: {
        email: {
          required: true,
          pattern: "email"
        },
        firstname: {
          required: true,
         
        },
        lastname: {
          required: true,
          
        },
        comfirmpass: {
          required: true,
      
        },
        password: {
          required: true,
          min: 6,
          max: 32,
        },
      },
    }
  );
 
  async function onSubmit() {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      let res = await Auth.register(form);
      if (res.data) {
        dispatch(registerAction(res.data));
      
      } else if (res.error) {
        dispatch(errorAction(res.error));
      }
    }
  }
   
    return(
        <form>
        <div className="row">
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerFirstName">
                First Name *
              </label>
              <input className="form-control form-control-sm"  onChange={inputChange}  value={form.firstname}
              name="firstname"  id="registerFirstName" type="text" placeholder="First Name *" required />
            </div>
            {error.firstname && <p className="txt-error">{error.firstname}</p>}
          </div>
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerLastName">
                Last Name *
              </label>
              <input className="form-control form-control-sm"  onChange={inputChange}  value={form.lastname}
              name="lastname"  id="registerLastName" type="text" placeholder="Last Name *" required />
            </div>
            {error.lastname && <p className="txt-error">{error.lastname}</p>}
          </div>
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerEmail">
                Email Address *
              </label>
              <input className="form-control form-control-sm"  onChange={inputChange}  value={form.email}
              name="email" id="registerEmail" type="email" placeholder="Email Address *" required />
            </div>
            {error.email && <p className="txt-error">{error.email}</p>}
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerPassword">
                Password *
              </label>
              <input className="form-control  form-control-sm"  onChange={inputChange}  value={form.password}
              name="password" id="registerPassword" type="password" placeholder="Password *" required />
            </div>
            {error.password && <p className="txt-error">{error.password}</p>}
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label className="sr-only"  onChange={inputChange}  value={form.comfirmPass}
              name="comfirmPass" htmlFor="registerPasswordConfirm">
                Confirm Password *
              </label>
              <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" required />
            </div>
            {error.confirmpass && <p className="txt-error">{error.confirmpass}</p>}
          </div>
          <div className="col-12 col-md-auto">
            {/* Link */}
            <div className="form-group font-size-sm text-muted">
              By registering your details, you agree with our Terms &amp; Conditions,
              and Privacy and Cookie Policy.
            </div>
          </div>
          <div className="col-12 col-md">
            {/* Newsletter */}
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                <label className="custom-control-label" htmlFor="registerNewsletter">
                  Sign me up for the Newsletter!
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* Button */}
            <button className="btn btn-sm btn-dark" type="submit" onClick={onSubmit} >
              Register
            </button>
          </div>
        </div>
      </form>
    )
}