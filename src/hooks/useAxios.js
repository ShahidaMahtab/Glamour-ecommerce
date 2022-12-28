import axios from "axios";
const useAxios = () => {
  const client = axios.create({
		baseURL: 'https://glamour-server.onrender.com/',
  });
  const admin = axios.create({
		baseURL: 'https://glamour-server.onrender.com/admin',
  });
  return { client, admin };
};

export default useAxios;
