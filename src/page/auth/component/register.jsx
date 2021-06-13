import { useDispatch, useSelector } from "react-redux";
import useFormValidate from "../../../core/UseForm";
import { registerAction, errorAction } from "../../../redux/action/AuthAction";
import Auth from "../../../sevice/Auth";

export default function Register() {
  let dispatch = useDispatch();

  let { registerError, success } = useSelector((state) => state.auth);

  let { error, inputChange, check, form } = useFormValidate(
    {
      email: "",
      last_name: "",
      first_name: "",
      confirm_pass: "",
      password: "",
    },
    {
      rule: {
        email: {
          required: true,
          pattern: "email",
        },
        first_name: {
          required: true,
        },
        last_name: {
          required: true,
        },
        confirm_pass: {
          required: true,
          match: "password",
        },
        password: {
          required: true,
          min: 6,
          max: 32,
        },
      },
    }
  );

  async function onSubmit(e) {
    e.preventDefault();
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

  return (
    <>
      {registerError && <p className="text-error">{registerError}</p>}
      <form>
        <div className="row">
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerfirst_name">
                First Name *
              </label>
              <input
                className="form-control form-control-sm"
                onChange={inputChange}
                value={form.first_name}
                name="first_name"
                id="registerfirst_name"
                type="text"
                placeholder="First Name *"
              />
                {error.first_name && (
              <p className="text-error">{error.first_name}</p>
            )}
            </div>
          
          </div>
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerlast_name">
                Last Name *
              </label>
              <input
                className="form-control form-control-sm"
                onChange={inputChange}
                value={form.last_name}
                name="last_name"
                type="text"
                placeholder="Last Name *"
              />
                {error.last_name && <p className="text-error">{error.last_name}</p>}

            </div>
          </div>
          <div className="col-12">
            {/* Email */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerEmail">
                Email Address *
              </label>
              <input
                className="form-control form-control-sm"
                onChange={inputChange}
                value={form.email}
                name="email"
                id="registerEmail"
                type="email"
                placeholder="Email Address *"
              />
              {error.email && <p className="text-error">{error.email}</p>}
            </div>
            
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label className="sr-only" htmlFor="registerPassword">
                Password *
              </label>
              <input
                className="form-control  form-control-sm"
                onChange={inputChange}
                value={form.password}
                name="password"
                id="registerPassword"
                type="password"
                placeholder="Password *"
              />
              {error.password && <p className="text-error">{error.password}</p>}

            </div>
          </div>
          <div className="col-12 col-md-6">
            {/* Password */}
            <div className="form-group">
              <label className="sr-only">Confirm Password *</label>
              <input
                onChange={inputChange}
                value={form.confirm_pass}
                name="confirm_pass"
                className="form-control form-control-sm"
                type="password"
                placeholder="Confirm Password *"
              />
                {error.confirm_pass && (
              <p className="text-error">{error.confirm_pass}</p>
            )}
            </div>
          
          </div>
          <div className="col-12 col-md-auto">
            {/* Link */}
            <div className="form-group font-size-sm text-muted">
              By registering your details, you agree with our Terms &amp;
              Conditions, and Privacy and Cookie Policy.
            </div>
          </div>
          <div className="col-12 col-md">
            {/* Newsletter */}
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  id="registerNewsletter"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor="registerNewsletter"
                >
                  Sign me up for the Newsletter!
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            {/* Button */}
            <button
              className="btn btn-sm btn-dark"
              type="submit"
              onClick={onSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
