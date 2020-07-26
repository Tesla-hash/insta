import axios from "axios";

export default axios.create({
  baseURL: "http://45.90.34.67:5000/",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*' }
});
