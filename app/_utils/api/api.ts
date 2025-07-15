import axios from "axios";
import { BASE_URL } from "./apiUrl";

// API定義
export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});