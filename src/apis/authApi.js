import { setToken } from "../utils/localStorageServices";
export const loginUserApi = async (userData) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var status = 200;
    var raw = JSON.stringify(userData);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    await fetch(`${process.env.REACT_APP_URL}/user/login`, requestOptions)
    .then((response)=>{
        status=response.status;
        return response.json();
    })
    .then((result)=>{
        console.log(result)
        setToken(result.token);
    })
    .catch(error => console.log('error', error));

    return status;
}