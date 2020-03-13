import axios, { AxiosResponse } from "axios";
const baseUrl = "http://localhost:8000";

const instance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-type": "application/json" }
});

class Api {
  _getToken = () => {
    return localStorage["my_app"];
  };

  createUser = async (data: {
    email: string;
    password: string;
    name: string;
  }): Promise<AxiosResponse> => {
    const { email, password, name } = data;
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

  logInByToken = async (): Promise<AxiosResponse | void> => {
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

  loginUser = async (data: {
    email: string;
    password: string;
  }): Promise<AxiosResponse> => {
    const { email, password } = data;
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

  getBooks = async (): Promise<AxiosResponse> => {
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

  getBook = async (id: string): Promise<AxiosResponse> => {
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

  voteForBook = async (id: string): Promise<AxiosResponse | void> => {
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
