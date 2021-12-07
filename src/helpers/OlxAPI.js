import Cookies from "js-cookie";
import qs from "qs";

const BASE_API = "http://alunos.b7web.com.br:501";

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(BASE_API + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASE_API + endpoint}?${qs.stringify(body)}`);

  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

const OlxAPI = () => {
  return {
    login: async (email, password) => {
      const json = await apiFetchPost("/user/signin", { email, password });
      return json;
    },
    register: async (name, state, email, password) => {
      const json = await apiFetchPost("/user/signup", {
        name,
        state,
        email,
        password,
      });
      return json;
    },
    getStates: async () => {
      const json = await apiFetchGet("/states");
      return json.states;
    },
  };
};

export default OlxAPI;
