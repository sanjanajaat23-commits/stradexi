import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role?: string;
  industry?: string;
  process?: string;
  pain?: string;
}

export async function submitContact(
  payload: ContactPayload
) {
  const response = await api.post(
    "/api/contacts",
    payload
  );

  return response.data;
}

export async function recordDemoRun(
  payload: { workflow: string }
) {
  const response = await api.post(
    "/api/demo/run",
    payload
  );

  return response.data;
}

export async function getBookingUrl() {
  const response = await api.get("/api/booking");

  return response.data.url as string;
}

export default api;