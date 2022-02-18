import react from "react";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://invitation-api.000webhostapp.com/",
});
