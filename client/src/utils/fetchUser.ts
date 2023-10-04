import axios from "./axios";

const fetchUser =  () => {
  if (typeof window === 'undefined') {
    return null;
  } else {
    const user = localStorage.getItem('switchUser') || 'null';
    return JSON.parse(user);
    // const {data} = await axios.get("/auth/user")
    // return data;
  }
};

export default fetchUser;
