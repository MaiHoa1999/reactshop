
const Auth = {
  async refreshToken() {
    let refreshToken = JSON.parse(localStorage.getItem("token"))?.refreshToken;

    return fetch(
      `http://cfd-reactjs.herokuapp.com/elearning/v4/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res?.data?.accessToken) {
          localStorage.setItem("token", JSON.stringify(res.data));
        }
      });
    return true;
  },
  login(form) {
    return fetch(`http://cfd-reactjs.herokuapp.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => res.json());
  },
  register(form) {
    return fetch(`http://cfd-reactjs.herokuapp.com/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((res) => res.json());
    
  },
  async update(data) {
    let token = JSON.parse(localStorage.getItem("token"))?.accessToken;

    let res = await fetch(
      `http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (res.status === 200) {
      return res.json();
    }
    if (res.status === 403) {
      await Auth.refreshToken();
      let token = JSON.parse(localStorage.getItem("token"))?.accessToken;

      return fetch(
        `http://cfd-reactjs.herokuapp.com/elearning/v4/profile/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      ).then((res) => res.json());
    }
  },
};
export default Auth;
