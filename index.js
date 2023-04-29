import getData from "./app.js";

const getUserData = async () => {
    const userData = await getData(1);
    console.log(userData)
}

getUserData()