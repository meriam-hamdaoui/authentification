import axios from "axios";

export const fetchUsers = async () => {
  //get our data from DB
  const { data } = await axios.get("http://localhost:5005/user");
  return data;
};

export const postUser = async (value) => {
  try {
    await axios.post("http://localhost:5005/user/signup", {
      ...value,
    });
  } catch (error) {
    console.error(`postUser ERROR => ${error}`);
  }
};
