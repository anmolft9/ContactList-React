import axios from "axios";
const apiEndPoint = "https://jsonplaceholder.typicode.com/users/?";

export const fetchContact = async (str) => {
  const url = apiEndPoint + "q=" + str;

  const { data } = await axios.get(url);

  return data;
};
