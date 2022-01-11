const axios = require("axios");

export async function getAllPosts() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASEURL}/posts`
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

export default { getAllPosts };