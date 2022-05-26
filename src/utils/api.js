import React from "react";

const API_HOST = "https://api.avamind.online/algo-operator";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this._baseUrl = props.baseUrl;
    this._headers = props.headers;
  }
  sendUserData(data) {
    return fetch(this._baseUrl, {
      method: "POST",
      headers: this._headers,
      body: data,
    });
  }
}
const api = new Api({
  baseUrl: `${API_HOST}/ui-api-web/user`,
  headers: {
    authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmcm9udC13ZWIiLCJleHAiOjE2NjA5MTQ0MDgsImlhdCI6MTY1MzEzODQwOH0.avw_NraOpEZZYXOyrf_kq09eCarcBxzFccg5RlHgUUNeuUivMe9JNkFk0vpmieizHfWFYSsHiCHO8Xh779wY2A',
    accept: "*/*",
    "Content-Type": "application/json",
  },
});
export default api;
