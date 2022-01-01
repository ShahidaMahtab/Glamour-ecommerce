import axios from "axios";
const useAxios = () => {
  const client = axios.create({
    baseURL: "https://blooming-atoll-01303.herokuapp.com/",
  });
  const admin = axios.create({
    baseURL: "https://blooming-atoll-01303.herokuapp.com/admin",
  });
  return { client, admin };
};

export default useAxios;
