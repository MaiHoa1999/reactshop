import Api from '../core/classApi'
const Auth = {
  login(form){
    return Api.post('login',form)
  },
  register(form) {
    return Api.post('register',form)
    
  },
  update: (data) => {
    return Api.token().post('update-profile', data)
}
  // async update(data) {
  //   let token = JSON.parse(localStorage.getItem("token"))?.accessToken;

  //   let res = await fetch(
  //     `http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   );
  //   if (res.status === 200) {
  //     return res.json();
  //   }
  //   if (res.status === 403) {
  //     await Auth.refreshToken();
  //     let token = JSON.parse(localStorage.getItem("token"))?.accessToken;

  //     return fetch(
  //       `http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify(data),
  //       }
  //     ).then((res) => res.json());
  //   }
  // },
};
export default Auth;
