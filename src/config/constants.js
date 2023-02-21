const DEV_MODE = false;
export const API_BASE = DEV_MODE === true ? "http://localhost:8006/api/v1" : "";
export const API_URL = DEV_MODE === true ? "http://localhost:8006/" : "";
export const PUBLIC_URL = DEV_MODE === true ? "http://localhost:3000/" : "";
export const ICON_URL =
  DEV_MODE === true ? "http://localhost:3000/image/icons/" : "/image/icons/";
export const IMAGE_URL =
  DEV_MODE === true ? "http://localhost:3000/image/" : "/image/";
