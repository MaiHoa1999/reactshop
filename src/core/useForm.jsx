import { useState } from "react";
let patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  patternPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  patternUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

export default function useFormValidate(initiaForm, validate) {
  let [form, setForm] = useState(initiaForm);
  let [error, setError] = useState({});
  function inputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }
  function check() {
    const errorObj = {};
    let { rule, message } = validate;
    for (let i in rule) {
      let r = rule[i];
      let m = message || {};
      if (r.required && !form[i]) {
        errorObj[i] = m[i]?.required || " Trường này không được bỏ trống";
        continue;
      }

      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "phone") pattern = patternPhone;

        if (pattern === "email") pattern = patternEmail;
        if (pattern === "url") pattern = patternUrl;
        if (!pattern.test(form[i])) {
          errorObj[i] =
            message[i]?.pattern || " Trường này không đúng định dạng";
        }
      }
      if (r.match) {
        if (form[i] !== form[r.match]) {
          errorObj[i] = "Phải giống với mật khẩu";
        }
      }

      if (r.min) {
        if (form[i].length < r.min) {
          errorObj[i] = m?.min || `Trường này không được ít hơn ${r.min} kí tự`;
        }
        if (form[i].length > r.max) {
          errorObj[i] =
            m?.max || `Trường này không được ít hơn  ${r.max} kí tự`;
        }
      }
    }
    setError(errorObj);
    return errorObj;
  }

  return {
    form,
    error,
    inputChange,
    check,
  };
}
