import React from "react";
let API_HOST;
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
      };
} 
const api = new Api({
    baseUrl: `${API_HOST}/ui-api-web/v1/user`,
    headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      }
})
export default api;