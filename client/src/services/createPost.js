const axios = require("axios");

export async function createPost(title,subtitle,content,tag,image) {
    await axios.post(`${process.env.REACT_APP_BASEURL}/posts/`, 
        { 
            title:title,
            subtitle:subtitle,
            content:content,
            tag:tag,
            image:image
        }
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default { createPost };
