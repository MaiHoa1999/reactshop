import { useDispatch } from "react-redux";
import Auth from "../../../sevice/auth";
import { loginAction, errorAction } from "../../../redux/action/authAction";
import useFormValidate from '../../../core/useForm'

export default function Login(){
  
  let dispatch = useDispatch();

  let { error, inputChange, check, form } = useFormValidate(
    {
      email: "",
      password: "",
    },
    {
      rule: {
        email: {
          required: true,
          pattern: "email"
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
      let res = await Auth.login(form);
      if (res.data) {
        dispatch(loginAction(res.data));
      
      } else if (res.error) {
        dispatch(errorAction(res.error));
      }
    }
  }
    return(
        <>
             {/* Form */}
             <form>
                  <div className="row">
                    <div className="col-12">
                      {/* Email */}
                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginEmail">
                          Email Address *
                        </label>
                        <input className="form-control form-control-sm" id="loginEmail"  onChange={inputChange}  value={form.email}
              name="email" type="email" placeholder="Email Address *" required />
                       
                      </div>
                      {error.email && <p className="txt-error">{error.email}</p>}
                    </div>
                    <div className="col-12">
                      {/* Password */}
                      <div className="form-group">
                        <label className="sr-only" htmlFor="loginPassword">
                          Password *
                        </label>
                        <input className="form-control form-control-sm" id="loginPassword"  onChange={inputChange}  value={form.password}
              name="password" type="password" placeholder="Password *" required />
                      </div>
                      {error.password && <p className="txt-error">{error.password}</p>}
                    </div>
                    <div className="col-12 col-md">
                      {/* Remember */}
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" id="loginRemember" type="checkbox" />
                          <label className="custom-control-label" htmlFor="loginRemember">
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto">
                      {/* Link */}
                      <div className="form-group">
                        <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                          Password?</a>
                      </div>
                      
                    </div>
                    <div className="col-12">
                      {/* Button */}
                      <button className="btn btn-sm btn-dark" type="submit" onClick={onSubmit}>
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
        </>
    )
}