import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getData = async () => {
  if (!url) {
    console.log("URL Undefined");
    return;
  }

  const data = await axios.get(url);

  return data;
};
