import axios from "axios"

const getData = async ( userID ) => {
    const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}` )
    const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)

    const { id, name, username, email, address, phone, website, company } = userData.data;
    const posts = postData.data;
    const allData = {
        userID: id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company,
        posts
    };
    
    return allData;
}



export default getData;