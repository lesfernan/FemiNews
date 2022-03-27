import axios from "axios";

const ApiBase = axios.create({
  baseURL: "https://ba8f-179-6-223-132.ngrok.io/",
});

export default ApiBase;
