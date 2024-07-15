import { api } from "./Api";

export const Register = async (data) => {
  try {
    const res = await api.post("/register", data);
    return res;
  } catch (e) {
    console.error(e.message);
  }
};
