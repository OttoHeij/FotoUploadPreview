import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8082",
  baseURL: "./afbeeldingen",
  headers: {
    "Content-type": "application/json"
  }
});
