import axios from "axios";

const ApiBase = axios.create({
  baseURL: "",
});

export default ApiBase;
