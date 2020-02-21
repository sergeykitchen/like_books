import axios from "axios";
const baseUrl = "http://localhost:8000";

const instance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-type": "application/json" }
});

class Api {
  _getToken = () => {
    return localStorage["my_app"];
  };

  createUser = async ({ email, password, name }) => {
    try {
      const res = await instance({
        method: "post",
        url: "/api/users",
        data: {
          user: {
            email: email,
            password: password,
            name: name
          }
        }
      });
      localStorage.setItem("my_app", `Bearer ${res.data.user.token}`);
      return res;
    } catch (e) {
      throw e;
    }
  };

  logInByToken = async () => {
    const token = this._getToken();
    if (!token) return;
    try {
      const res = await instance({
        method: "post",
        url: "/api/users/autologin",
        headers: {
          Authorization: token
        }
      });
      return res;
    } catch (e) {
      throw e;
    }
  };

  loginUser = async ({ email, password }) => {
    try {
      const res = await instance({
        method: "post",
        url: "/api/users/login",
        data: {
          user: {
            email: email,
            password: password
          }
        }
      });
      localStorage.setItem("my_app", `Bearer ${res.data.user.token}`);
      return res;
    } catch (e) {
      throw e;
    }
  };

  getBooks = async () => {
    try {
      const res = await instance({
        method: "get",
        url: "/api/books"
      });
      return res;
    } catch (e) {
      throw e;
    }
  };

  getBook = async id => {
    try {
      const res = await instance({
        method: "get",
        url: `/api/books/${id}`
      });
      return res;
    } catch (e) {
      throw e;
    }
  };

  voteForBook = async id => {
    const token = this._getToken();
    if (!token) return;
    try {
      const res = await instance({
        method: "post",
        url: `/api/books/vote`,
        data: {
          bookId: id
        },
        headers: {
          Authorization: token
        }
      });
      return res;
    } catch (e) {
      throw e;
    }
  };
}

export default new Api();
