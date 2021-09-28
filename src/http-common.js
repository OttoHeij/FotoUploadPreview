import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    "Content-type": "application/json"
  }
});

// baseURL: "https://tellus2.nl:8082",
